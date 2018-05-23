import { Component, Input, ViewContainerRef, SimpleChange, OnInit } from "@angular/core";
import template from "./loader.component.html";

export enum LoaderSize {
    large = 'large',
    medium = 'medium',
    small = 'small',
}

@Component({
    selector: "sdc-loader",
    template: template
})

export class LoaderComponent {
    @Input() display: boolean;
    @Input() size?: LoaderSize = LoaderSize.large; // small || medium || large
    @Input() global?: boolean = false; // If is relative is set to true, loader will appear over parent element. Otherwise, will be fixed over the entire page.
    constructor() {}
}
