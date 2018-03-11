/**
 * Created by rc2122 on 6/1/2017.
 */
import {
    Component, Input, Output, ViewContainerRef, ViewChild, ComponentRef,
    trigger, state, animate, transition, style
} from '@angular/core';
import template from './modal.component.html';
import { ModalButtonComponent } from './modal-button.component';
import { EventEmitter } from '@angular/forms/src/facade/async';

@Component({
    selector: 'sdc-modal',
    template,
    animations: [
        trigger('toggleBackground', [
            transition('* => 1',
                [style({opacity: 0}), animate('.45s cubic-bezier(0.23, 1, 0.32, 1)')]),
            transition('1 => *',
                [animate('.35s cubic-bezier(0.23, 1, 0.32, 1)', style({opacity: 0}))])
        ]),
        trigger('toggleModal', [
            transition('* => 1',
                [style({opacity: 0, transform: 'translateY(-80px)'}),
                      animate('.45s cubic-bezier(0.23, 1, 0.32, 1)')]),
            transition('1 => *',
                [style({opacity: 1, transform: 'translateY(0px)'}),
                    animate('.35s ease-in-out', style({opacity: 0, transform: 'translateY(-80px)'}))])
        ])
    ]
})

export class ModalComponent {

    @Input() public size: string; // 'xl|l|md|sm|xsm';
    @Input() public title: string;
    @Input() public message: string;
    @Input() public buttons: ModalButtonComponent[];
    @Input() public type: string; // 'info|error|alert|custom';
    @Output() public closeAnimationComplete: EventEmitter<any> = new EventEmitter<any>();
    public modalVisible: boolean = true;
    // Allows for custom component as body instead of simple message.
    // See ModalService.createActionModal for implementation details, and HttpService's catchError() for example.
    @ViewChild('dynamicContentContainer', {read: ViewContainerRef}) public dynamicContentContainer: ViewContainerRef;
    public innerModalContent: ComponentRef<ModalComponent>;

    public modalToggled = (toggleEvent: any) => {
        if (!toggleEvent.toState) {
            this.closeAnimationComplete.emit();
        }
    }
}
