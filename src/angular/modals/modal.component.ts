import {
    Component, Input, Output, ViewContainerRef, ViewChild, ComponentRef, trigger, state, animate, transition, style,
    EventEmitter, Renderer, OnInit
} from '@angular/core';
import { ModalButtonComponent } from './modal-button.component';
import { LowerCasePipe } from '@angular/common';
import { ModalCloseButtonComponent } from './modal-close-button.component';
import { ModalType } from './models/modal-config';
import { SvgIconComponent } from '../components';
import template from './modal.component.html';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Mode, Size } from '../common/enums';

@Component({
    selector: 'sdc-modal',
    template: template,
    animations: [
        trigger('toggleBackground', [
            transition('* => 1', [style({opacity: 0}), animate('.45s cubic-bezier(0.23, 1, 0.32, 1)')]),
            transition('1 => *', [animate('.35s cubic-bezier(0.23, 1, 0.32, 1)', style({opacity: 0}))])
        ]),
        trigger('toggleModal', [
            transition('* => 1', [style({opacity: 0, transform: 'translateY(-80px)'}),  animate('.45s cubic-bezier(0.23, 1, 0.32, 1)')]),
            transition('1 => *', [style({opacity: 1, transform: 'translateY(0px)'}), animate('.35s ease-in-out', style({opacity:0, transform: 'translateY(-80px)'}))])
        ])
    ]
})

export class ModalComponent implements OnInit {

    @Input() size: string; 'xl|l|md|sm|xsm';
    @Input() title: string;
    @Input() message: string;
    @Input() buttons: ModalButtonComponent[];
    @Input() type: ModalType;
    @Input() testId: string;
    @Input() instanceRef: ComponentRef<ModalComponent>; // the component ref is injected to the component in order to destroy the componet from itself

    @ViewChild('modalCloseButton')
    set refCloseButton(_modalCloseButton: ModalCloseButtonComponent) {
        this.modalCloseButton = _modalCloseButton;
    }

    modalVisible: boolean;
    // Allows for custom component as body instead of simple message.
    @ViewChild('dynamicContentContainer', {read: ViewContainerRef}) dynamicContentContainer: ViewContainerRef;
    innerModalContent: ComponentRef<any>;

    public calculatedTestId: string;
    public modalCloseButton: ModalCloseButtonComponent;
    public svgIconContentSafeHtml: SafeHtml;

    private infoSvg = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="30" height="30" viewBox="0 0 24 24">
    <defs><path fill="#000" id="info-a" d="M11,20 C6,20 2,16 2,11 C2,6 6,2 11,2 C16,2 20,6 20,11 C20,16 16,20 11,20 M11,0 C4.9,0 0,4.9 0,11 C0,17.101 4.9,22 11,22 C17.1,22 22,17.101 22,11 C22,4.9 17.1,0 11,0 M11,10 C10.4,
    10 10,10.4 10,11 L10,15 C10,15.601 10.4,16 11,16 C11.6,16 12,15.601 12,15 L12,11 C12,10.4 11.6,10 11,10 M10.2998,6.2998 C10.0998,6.4998 9.9998,6.6998 9.9998,6.9998 C9.9998,7.2998 10.0998,7.4998 10.2998,7.6998 C10.4998,
    7.9008 10.6998,7.9998 10.9998,7.9998 C11.2998,7.9998 11.4998,7.9008 11.6998,7.6998 C11.9008,7.4998 11.9998,7.2998 11.9998,6.9998 C11.9998,6.6998 11.9008,6.4998 11.6998,6.2998 C11.2998,5.9008 10.6998,5.9008 10.2998,6.2998"/>
    </defs><g fill="none" fill-rule="evenodd" transform="translate(1 1)"><use class="sdc-modal__svg-use" xlink:href="#info-a"/></g></svg>`;
    private warningSvg = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="30" height="30" viewBox="0 0 24 24"><defs><path fill="#000" id="alert-a" d="M20.5815,18.7997 C20.3815,
    18.9997 20.0815,19.0997 19.8815,19.0997 L2.8815,19.0997 C2.6815,19.0997 2.5815,19.0997 2.3815,18.9997 C1.8815,18.6997 1.7815,18.0997 1.9815,17.5997 L10.4815,3.4997 C10.5815,3.4007 10.6815,3.1997 10.7815,3.1997 C11.2815,
    2.9007 11.8815,3.0997 12.1815,3.4997 L20.6825,17.5997 C20.7815,17.6997 20.7815,17.9007 20.7815,18.0997 C20.8815,18.4007 20.6825,18.5997 20.5815,18.7997 M22.3815,16.5997 L13.9815,2.4007 C13.5815,1.6997 12.8815,1.1997 12.0815,
    0.9997 C11.2815,0.7997 10.4815,0.9007 9.7815,1.2997 C9.3815,1.4997 8.9815,1.9007 8.7815,2.2997 L0.3815,16.5997 C-0.4185,17.9997 0.0815,19.9007 1.4815,20.6997 C1.8815,20.9997 2.3815,21.0997 2.8815,21.0997 L19.8815,
    21.0997 C20.6825,21.0997 21.4815,20.7997 21.9815,20.1997 C22.5815,19.5997 22.8815,18.9007 22.8815,18.0997 C22.7815,17.5997 22.6825,16.9997 22.3815,16.5997 M11,7 C10.4,7 10,7.4 10,8 L10,12 C10,12.601 10.4,13 11,13 C11.6,13 12,
    12.601 12,12 L12,8 C12,7.4 11.6,7 11,7 M10.3,15.3 C10.1,15.499 10,15.699 10,15.999 C10,16.3 10.1,16.499 10.3,16.699 C10.5,16.9 10.7,16.999 11,16.999 C11.3,16.999 11.5,16.9 11.7,16.699 C11.9,16.499 12,16.199 12,15.999 C12,
    15.8 11.9,15.499 11.7,15.3 C11.3,14.9 10.7,14.9 10.3,15.3"/></defs><g fill="#ffb81c" fill-rule="evenodd" transform="translate(1 1)"><use class="sdc-modal__svg-use" xlink:href="#alert-a"/></g></svg>`;
    private errorSvg = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="30" height="30" viewBox="0 0 24 24"><defs><path fill="#000" id="x-a" d="M11,20 C6,20 2,16 2,11 C2,6 6,2 11,
    2 C16,2 20,6 20,11 C20,16 16,20 11,20 M11,0 C4.9,0 0,4.9 0,11 C0,17.1 4.9,22 11,22 C17.1,22 22,17.1 22,11 C22,4.9 17.1,0 11,0 M14.2591,7.29935 C13.8591,6.90035 13.2591,6.90035 12.8591,7.29935 L10.5591,9.59935 L8.2591,
    7.29935 C7.8591,6.90035 7.2591,6.90035 6.8591,7.29935 C6.4591,7.69935 6.4591,8.29935 6.8591,8.69935 L9.1581,10.99935 L6.8591,13.29935 C6.4591,13.69935 6.4591,14.29935 6.8591,14.69935 C7.0591,14.90035 7.2591,14.99935 7.5591,
    14.99935 C7.8591,14.99935 8.0591,14.90035 8.2591,14.69935 L10.5591,12.40035 L12.8591,14.69935 C13.0591,14.90035 13.3591,14.99935 13.5591,14.99935 C13.7591,14.99935 14.0591,14.90035 14.2591,14.69935 C14.6581,14.29935 14.6581,
    13.69935 14.2591,13.29935 L11.9591,10.99935 L14.2591,8.69935 C14.6581,8.29935 14.6581,7.69935 14.2591,7.29935"/></defs><g fill="none" fill-rule="evenodd" transform="translate(1 1)">
    <use class="sdc-modal__svg-use" xlink:href="#x-a"/></g></svg>`;
    private successSvg = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="30" height="30" viewBox="0 0 24 24" fill="#4ca90c"><path id="success+20-a" d="M20.1825992,10.445793 C20.6735306,
    10.445793 21.0008182,10.7730806 21.0008182,11.264012 L21.0008182,12.0004091 C21.0008182,16.9915451 16.9915451,21 12.0004091,21 C7.00927315,21 3,16.9915451 3,12.0004091 C3,7.00927315 7.00927315,3 12.0004091,3 C13.3095595,3 14.536888,
    3.3272876 15.6823947,3.81821901 C16.0915042,3.98186281 16.255148,4.47279422 16.0915042,4.88190372 C15.9278604,5.29101323 15.436929,5.45465703 15.0278194,5.29101323 C14.0459566,4.88190372 13.0640938,4.63643802 12.0004091,
    4.63643802 C7.90931406,4.63643802 4.63643802,7.90931406 4.63643802,12.0004091 C4.63643802,16.0906859 7.90931406,19.363562 12.0004091,19.363562 C16.0915042,19.363562 19.3643802,16.0906859 19.3643802,12.0004091 L19.3643802,
    11.264012 C19.3643802,10.7730806 19.6916678,10.445793 20.1825992,10.445793 Z M21.5737352,4.06343925 C21.9002046,4.39072685 21.9002046,4.88165826 21.5737352,5.20894586 L12.5733261,14.209355 C12.4096823,14.3729988 12.1642166,
    14.4548207 12.0005728,14.4548207 C11.836929,14.4548207 11.5914632,14.3729988 11.4278194,14.209355 L8.97316242,11.7546979 C8.64587481,11.4274103 8.64587481,10.9364789 8.97316242,10.6091913 C9.30045002,10.2819037 9.79138143,
    10.2819037 10.118669,10.6091913 L12.0005728,12.491095 L20.4282286,4.06343925 C20.7555162,3.73615164 21.2464476,3.73615164 21.5737352,4.06343925 Z"></path></svg>`;
    private noSvg = ``;

    constructor(private renderer: Renderer,
                private domSanitizer: DomSanitizer,
                private lowerCasePipe: LowerCasePipe
            ) {
        this.modalVisible = true;
    }

    ngOnInit() {

        switch (this.type) {
            case ModalType.info:
                this.svgIconContentSafeHtml = this.domSanitizer.bypassSecurityTrustHtml(this.infoSvg);
                break;
            case ModalType.warning:
                this.svgIconContentSafeHtml = this.domSanitizer.bypassSecurityTrustHtml(this.warningSvg);
                break;
            case ModalType.error:
                this.svgIconContentSafeHtml = this.domSanitizer.bypassSecurityTrustHtml(this.errorSvg);
                break;
            case ModalType.success:
                this.svgIconContentSafeHtml = this.domSanitizer.bypassSecurityTrustHtml(this.successSvg);
                break;
            default:
            this.svgIconContentSafeHtml = this.domSanitizer.bypassSecurityTrustHtml(this.noSvg);
        }
    }

    getCalculatedTestId = (buttonText: string): string => {
        // TODO: Replace this
        if (this.testId) {
            return this.testId + '-' + this.lowerCasePipe.transform(buttonText);
        }
        return null;
    }

    public modalToggled = (toggleEvent: any) => {
        if (!toggleEvent.toState) {
            this.instanceRef.destroy();
        }
    }

    public getCloseButton = (): ModalCloseButtonComponent => {
        return this.modalCloseButton;
    }

    public getButtonById = (id: string): ModalButtonComponent => {
        return this.buttons.find((button) => {
            return button.id && button.id === id;
        });
    }

    public getButtons = (): ModalButtonComponent[] => {
        return this.buttons;
    }

    public setButtons = (_buttons: ModalButtonComponent[]): void => {
        this.buttons = _buttons;
    }

    public getTitle = (): string => {
        return this.title;
    }

    public setTitle = (_title: string): void => {
        this.title = _title;
    }

    public hoverAnimation(evn: MouseEvent) {
        this.renderer.setElementClass(evn.target as HTMLElement, 'sdc-ripple-click__animated', true);
        // evn.taregt.classList.add('sdc-ripple-click__animated');
    }

    public closeModal = (): void => {
        this.modalVisible = false;
    }
}
