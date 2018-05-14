import { Component, Input, ViewContainerRef, SimpleChanges } from "@angular/core";
import template from "./loader.component.html";


export enum Size {
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
    @Input() size: string;// small || medium || large
    @Input() relative: boolean; // If is relative is set to true, loader will appear over parent element. Otherwise, will be fixed over the entire page.
    @Input() loaderDelay: number; //optional - number of ms to delay loader display.
    
    private isVisible: boolean = false;
    private offset : {
        top: string;
        left: string;
        width: string;
        height: string;
    };

    constructor(private viewContainerRef: ViewContainerRef) { 
    }

    ngOnInit() {
        if (!this.size) {
            this.size = 'large';
        }
        if (this.display === true) {
            this.changeLoaderDisplay(true);
        }
    }

    ngOnChanges(changes: SimpleChanges) {
        if(changes.display){
            this.changeLoaderDisplay(this.display);
        }
    }

    private changeLoaderDisplay = (display: boolean): void => {
        if (display) {
            window.setTimeout((): void => {
                this.display && this.showLoader(); //only show loader if this.display has not changed in the meanwhile.
            }, this.loaderDelay || 0);
        } else {
            this.isVisible = false;
        }
    }

    private showLoader = () => {
        if (this.relative === true) {
            let parentElement = this.viewContainerRef.element.nativeElement.parentElement;
            this.offset = {
                left: (parentElement.offsetLeft !== undefined) ? parentElement.offsetLeft + "px" : undefined,
                top: (parentElement.offsetTop !== undefined) ? parentElement.offsetTop + "px" : undefined,
                width: (parentElement.offsetWidth !== undefined) ? parentElement.offsetWidth + "px" : undefined,
                height: (parentElement.offsetHeight !== undefined) ? parentElement.offsetHeight + "px" : undefined
            };
        } else {
            this.offset = {
                top:undefined,
                left:undefined,
                width:undefined,
                height:undefined
            };
        }
        this.isVisible = true;
    }

}