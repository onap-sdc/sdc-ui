/**
 * Created by rc2122 on 6/1/2017.
 */
import {
    Component, Input, ViewContainerRef, ViewChild, ComponentRef,
    trigger, state, animate, transition, style
} from '@angular/core';
import template from './modal.component.html';
import { ModalButtonComponent } from './modal-button.component';

@Component({
    selector: 'sdc-modal',
    template: template, 
    animations: [
        trigger('toggleBackground', [
            transition(':enter', [style({opacity:0}), animate('.45s cubic-bezier(0.23, 1, 0.32, 1)')]),
            transition(':leave', [animate('1s cubic-bezier(0.23, 1, 0.32, 1)', style({opacity:1}))])
        ]),
        trigger('toggleModal', [
           transition(':enter', [style({opacity:0, transform: 'translateY(-60px)'}),  animate('.45s cubic-bezier(0.23, 1, 0.32, 1)')]),
           transition(':leave', [animate('1s ease-in-out', style({opacity:1, transform: 'translateY(-60px)'}))])
        ])
    ]
})

export class ModalComponent{

    @Input() size:string; 'xl|l|md|sm|xsm';
    @Input() title:string;
    @Input() message:string;
    @Input() buttons:Array<ModalButtonComponent>;
    @Input() type:string; 'info|error|alert|custom';

    //Allows for custom component as body instead of simple message. See ModalService.createActionModal for implementation details, and HttpService's catchError() for example.
    @ViewChild('dynamicContentContainer', {read: ViewContainerRef}) dynamicContentContainer:ViewContainerRef;
    innerModalContent:ComponentRef<ModalComponent>;
}
