import { Component, EventEmitter, Input, Output } from "@angular/core";
import template from "./tag-item.component.html";

@Component({
    selector: 'sdc-tag-item',
    template: template,
    host: {'class': 'sdc-tag-item'}
})

export class TagItemComponent {
    @Input() public text: string;
    @Input() public isViewOnly: boolean;
    @Input() public index: number;
    @Output() public clickOnDelete: EventEmitter<number> = new EventEmitter<number>();
}
