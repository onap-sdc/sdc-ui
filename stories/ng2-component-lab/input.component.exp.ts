/**
 * Created by ob0695 on 10/3/2017.
 */
import {experimentOn} from '@islavi/ng2-component-lab';
import {OptionTypes} from "../../src/angular/form-elements/input/validation.model";

let customErrorValidationResponse = false;
export default experimentOn('Input')
    .group('Input with Patterns', [
        {
            id: 'InputwithPatterns',
            showSource: true,
            context:{
                optionTypes:OptionTypes,
                checkFlag: false,
                customErrorValidationResponse:customErrorValidationResponse,
                customErrorValidation: function(){console.log('customErrorValidation Response: ', customErrorValidationResponse); return customErrorValidationResponse;}
            },
            template: `
              <sdc-input label="Please Enter value" [checkValidation]="checkFlag" (onInputBlur)="input.validateValue()" [placeHolder]="'Please enter something'" 
              [options] = "[{type:optionTypes.REQUIRED, message:'couldn\\'t be empty'}, {type:optionTypes.PATTERN, patterns : ['test'],message:'not matches with patterns'}, {type:optionTypes.CUSTOM, callback : customErrorValidation,message:'not matches with Custom Validation Callback'}]" #input></sdc-input>
               <div style="margin-top:10px">
                  <button (click)="checkFlag = !checkFlag">Validate! {{checkFlag}}</button> 
               </div>
               <div style="margin-top:10px">
                  Custom Validation Callback to response: {{customErrorValidationResponse}}
               </div>
           `
        }
]);
