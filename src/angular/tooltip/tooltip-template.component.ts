import {Component, ViewChild, ViewContainerRef} from '@angular/core';

@Component({
    selector: 'tooltip-template',
    template: `
    <div class="sdc-tooltip-template-container">
        <ng-container #templateContainer></ng-container>
    </div>`
})

export class TooltipTemplateComponent {
    @ViewChild('templateContainer', {read: ViewContainerRef}) public container: ViewContainerRef;

    public addText(text: string){
        this.container.element.nativeElement.textContent = text;
    }
}
