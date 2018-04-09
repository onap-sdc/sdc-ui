import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { ValidationComponent } from './validation.component';
import { ValidatorComponent } from './validators/base.validator.component';
import { RequiredValidatorComponent } from './validators/required.validator.component';
import { RegexValidatorComponent } from './validators/regex.validator.component';
import { SvgIconModule } from './../../svg-icon/svg-icon.module';

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        ReactiveFormsModule,
        SvgIconModule
    ],
    declarations: [
        ValidationComponent,
        RegexValidatorComponent,
        RequiredValidatorComponent
    ],
    exports: [
        ValidationComponent,
        RegexValidatorComponent,
        RequiredValidatorComponent
    ]
})
export class ValidationModule {
}
