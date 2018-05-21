import { Component, Input, Output, ViewContainerRef, ViewChild, ComponentRef, trigger, state, animate, transition, style, EventEmitter, Renderer, ElementRef } from '@angular/core';
import { ModalButtonComponent } from './modal-button.component';
import { LowerCasePipe } from '@angular/common';
import { ModalCloseButtonComponent } from './modal-close-button.component';
import template from './modal.component.html';

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

export class ModalComponent {

    @Input() size: string; 'xl|l|md|sm|xsm';
    @Input() title: string;
    @Input() message: string;
    @Input() buttons: ModalButtonComponent[];
    @Input() type: string; 'info|error|alert|custom';
    @Input() testId: string;
    @Output() closeAnimationComplete: EventEmitter<any> = new EventEmitter<any>();

    @ViewChild('modalCloseButton')
    set refCloseButton(_modalCloseButton: ModalCloseButtonComponent) {
        this.modalCloseButton = _modalCloseButton;
    }

    modalVisible: boolean;
    // Allows for custom component as body instead of simple message.
    // See ModalService.createActionModal for implementation details, and HttpService's catchError() for example.
    @ViewChild('dynamicContentContainer', {read: ViewContainerRef}) dynamicContentContainer: ViewContainerRef;
    innerModalContent: ComponentRef<ModalComponent>;

    public calculatedTestId: string;
    public modalCloseButton: ModalCloseButtonComponent;

    constructor(private renderer: Renderer,
                private lowerCasePipe: LowerCasePipe
            ) {
        this.modalVisible = true;
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
            this.closeAnimationComplete.emit();
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
}
