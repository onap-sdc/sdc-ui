import { NgModule } from "@angular/core";
import { TagItemComponent } from "./tag-item/tag-item.component";
import { TagCloudComponent } from "./tag-cloud.component";
import { CommonModule } from "@angular/common";
import { FormElementsModule } from './../form-elements/form-elements.module';

@NgModule({
    declarations: [
        TagItemComponent,
        TagCloudComponent
    ],
    imports: [
        CommonModule,
        FormElementsModule
    ],
    exports: [
        TagCloudComponent
    ]
})
export class TagCloudModule {
}
