/**
 * Created by ob0695 on 10/3/2017.
 */
import {experimentOn} from '@islavi/ng2-component-lab';
import {OptionTypes} from "../../src/angular/form-elements/input/validation.model";
let customErrorValidationResponse = true;
export default experimentOn('Input')
    .group('Input Texts', [
        {
            id: 'InputwithAll',
            showSource: true,
            context:{
                optionTypes:OptionTypes,
                customErrorValidationResponse:customErrorValidationResponse,
                customErrorValidation() : boolean {console.log('customErrorValidation Response: ', customErrorValidationResponse); return false;}
            },
            title: 'Required input with Patterns and Callback',
            template: `
              <sdc-input label="Please Enter value" sdc-validation [valueToCheck]="input.value"  (onInputBlur)="sdcValidation.validateValue()" [placeHolder]="'Please enter something'" 
              [options] = "[{type:optionTypes.REQUIRED, message:'couldn\\'t be empty'}, {type:optionTypes.PATTERN, patterns : ['test'],message:'not matches with patterns'},  {type:optionTypes.CUSTOM, callback : customErrorValidation,message:'not matches with Custom Validation Callback'}]" #input #sdcValidation="sdc-validation"></sdc-input>
               <div style="margin-top: 10px">
                  <button (click)="sdcValidation.validateValue()">Validate!</button> 
               </div>
           `
        },
        {
            id: 'InputwithPatterns',
            showSource: true,
            context:{
                optionTypes:OptionTypes,
            },
            title: 'Required input with Patterns and Callback',
            template: `
              <sdc-input label="Please Enter value" sdc-validation [valueToCheck]="input.value"  (onInputBlur)="sdcValidation.validateValue()" [placeHolder]="'Please enter something'" 
              [options] = "[{type:optionTypes.PATTERN, patterns : ['test'],message:'not matches with patterns'}]" #input #sdcValidation="sdc-validation"></sdc-input>
               <div style="margin-top: 10px">
                  <button (click)="sdcValidation.validateValue()">Validate!</button> 
               </div>
           `
        },
        {
            id: 'InputSimple',
            showSource: true,
            context:{
                optionTypes:OptionTypes,
            },
            title: 'Required input with Patterns and Callback',
            template: `
              <sdc-input label="Please Enter value" sdc-validation [valueToCheck]="input.value"  (onInputBlur)="sdcValidation.validateValue()" [placeHolder]="'Please enter something'" 
              #input #sdcValidation="sdc-validation"></sdc-input>
               <div style="margin-top: 10px">
                  <button (click)="sdcValidation.validateValue()">Validate!</button> 
               </div>
           `
        }
]);
