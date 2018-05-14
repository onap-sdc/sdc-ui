import { Component, Input, OnInit, ElementRef, AfterContentChecked } from "@angular/core";
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



export class LoaderComponent implements AfterContentChecked{
    @Input() showLoader:boolean = false;
    @Input() size: string;
    @Input() position: string;

    ngAfterContentChecked() {
        if(this.position == 'fixed') this.setPropsToLoader(this.position);
    }

    constructor(private elementRef: ElementRef) {
       
    }

    private setPropsToLoader = (positionStyle:string):void => {
        let parentProps = this.elementRef.nativeElement.parentNode.getBoundingClientRect();
        this.elementRef.nativeElement.style.width = parentProps.width + 'px';
        let top:string = parentProps.top.toString();
        let left:string = parentProps.left.toString();
        this.elementRef.nativeElement.style.height = parentProps.height + 'px';
        this.elementRef.nativeElement.style.left = left + 'px';
        this.elementRef.nativeElement.style.top = top + 'px';
        this.elementRef.nativeElement.style.background = 'red';   
        this.elementRef.nativeElement.style.position = 'fixed';

        console.log(this.elementRef.nativeElement.style, 'here new style');
        
        // elementRef.nativeElement.style.
    
    };

}