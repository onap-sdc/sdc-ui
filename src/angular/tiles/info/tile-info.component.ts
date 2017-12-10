import template from "./tile-info.component.html";
import {Component, Input, ElementRef, OnInit} from "@angular/core";


@Component({
    selector:'sdc-tile-info',
    template: template,
    host:{ class: 'sdc-tile-content'}
})

export class TileInfoComponent {
    @Input() public color: string;
    @Input() public icon: string;
    @Input() public supertitle : string;
    @Input() public title: string;
    @Input() public subtitle: string;


    constructor(){
    }

}

