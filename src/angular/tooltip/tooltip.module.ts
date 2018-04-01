import { NgModule } from '@angular/core';
import { TooltipDirective } from './tooltip.directive';
import { TooltipTemplateComponent } from './tooltip-template.component';

@NgModule({
    declarations: [
        TooltipDirective,
        TooltipTemplateComponent
    ],
    imports: [],
    entryComponents: [TooltipTemplateComponent],
    exports: [
        TooltipDirective
    ],
})
export class TooltipModule {
}
