import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { SvgIconModule } from './../../svg-icon/svg-icon.module';
import { ValidationComponent } from './validation.component';
import { ValidatorComponent } from './validators/base.validator.component';
import { RequiredValidatorComponent } from './validators/required.validator.component';
import { RegexValidatorComponent } from './validators/regex.validator.component';
import { CustomValidatorComponent } from './validators/custom.validator.component';

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
        RequiredValidatorComponent,
        CustomValidatorComponent
    ],
    exports: [
        ValidationComponent,
        RegexValidatorComponent,
        RequiredValidatorComponent,
        CustomValidatorComponent
    ]
})
export class ValidationModule {
}
