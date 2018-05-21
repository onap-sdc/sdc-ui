import { Component, Input, ViewContainerRef, SimpleChanges } from "@angular/core";
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
    @Input() size : LoaderSize;// small || medium || large
    @Input() global: boolean = false; // If is relative is set to true, loader will appear over parent element. Otherwise, will be fixed over the entire page.
    @Input() loaderDelay: number; //optional - number of ms to delay loader display.
    
    private isVisible: boolean = false;

    constructor(private viewContainerRef: ViewContainerRef) { 
    }

    ngOnInit() {
        if (!this.size) {
            this.size = LoaderSize.large;
        }
    }



}