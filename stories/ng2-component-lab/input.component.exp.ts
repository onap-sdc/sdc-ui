/**
 * Created by ob0695 on 10/3/2017.
 */
import {experimentOn} from '@islavi/ng2-component-lab';
import {OptionTypes} from "../../src/angular/form-elements/input/validation.model";

export default experimentOn('Input')
    .case('Input with Patterns', {
        showSource: true,
        context:{
            optionTypes:OptionTypes
        },
        template: `
      <sdc-input label="Please Enter value"  [placeHolder]="'Please enter something'" [options] = "[{type:optionTypes.REQUIRED, message:'HIHI'}, {type:optionTypes.PATTERN, patterns : ['test'],message:'pattern test'}]" #input></sdc-input>
       <div>
          <button (click)="input.validateValue()">Validate!</button> 
       </div>
    `
    });
