import { Component, EventEmitter, Input, Output, HostBinding } from "@angular/core";
import template from "./tag-item.component.html";

@Component({
    selector: 'sdc-tag-item',
    template: template
})

export class TagItemComponent {
    @HostBinding('class') classes = 'sdc-tag-item';
    @Input() public text: string;
    @Input() public isViewOnly: boolean;
    @Input() public index: number;
    @Output() public clickOnDelete: EventEmitter<number> = new EventEmitter<number>();
}
