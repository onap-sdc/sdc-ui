/**
 * Created by ob0695 on 10/3/2017.
 */
import {experimentOn} from '@islavi/ng2-component-lab';
import {OptionTypes} from "../../src/angular/form-elements/input/validation.model";

export default experimentOn('Input')
    .group('Input with Patterns', [
        {
            id: 'InputwithPatterns',
            showSource: true,
            context:{
                optionTypes:OptionTypes
            },
            template: `
              <sdc-input label="Please Enter value" sdc-validation [valueToCheck]="input.value"  (onInputBlur)="sdcValidation.validateValue()" [placeHolder]="'Please enter something'" [options] = "[{type:optionTypes.REQUIRED, message:'couldn\\'t be empty'}, {type:optionTypes.PATTERN, patterns : ['test'],message:'not matches with patterns'}]" #input #sdcValidation="sdc-validation"></sdc-input>
               <div>
                  <button (click)="sdcValidation.validateValue()">Validate!</button> 
               </div>
           `
        }
]);
