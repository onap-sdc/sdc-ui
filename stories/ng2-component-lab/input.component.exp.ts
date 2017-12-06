/**
 * Created by ob0695 on 10/3/2017.
 */
import {experimentOn} from '@islavi/ng2-component-lab';
import {OptionTypes} from "../../src/angular/form-elements/input/validation.model";

let customErrorValidationResponse = true;
export default experimentOn('Input')
    .group('Text Inputs', [
        {
            id: 'InputwithAll',
            showSource: true,
            context:{
                optionTypes:OptionTypes,
                checkFlag: false,
                customErrorValidationResponse:customErrorValidationResponse,
                customErrorValidation: function(){console.log('customErrorValidation Response: ', customErrorValidationResponse); return customErrorValidationResponse;}
            },
            title: 'Required input with patterns and callback',
            template: `
              <sdc-input label="Please Enter value" [checkValidation]="checkFlag"  [placeHolder]="'Please enter something'" 
              [options] = "[{type:optionTypes.REQUIRED, message:'couldn\\'t be empty'}, {type:optionTypes.PATTERN, patterns : ['test'],message:'not matches with patterns'}, {type:optionTypes.CUSTOM, callback : customErrorValidation,message:'not matches with Custom Validation Callback'}]" #input></sdc-input>
               <div style="margin-top:10px">
                  <button (click)="checkFlag = !checkFlag">Validate!</button> 
               </div>
               <div style="margin-top:10px">
                  Custom Validation Callback to response: {{customErrorValidationResponse}}
               </div>
           `
        },
        {
            id: 'InputwithPatterns',
            showSource: true,
            context:{
                optionTypes:OptionTypes,
                checkFlag: false,
                customErrorValidationResponse:customErrorValidationResponse,
                customErrorValidation: function(){console.log('customErrorValidation Response: ', customErrorValidationResponse); return customErrorValidationResponse;}
            },
            title: 'Required input with patterns and callback',
            template: `
              <sdc-input label="Please Enter value" [checkValidation]="checkFlag"  [placeHolder]="'Please enter something'" 
              [options] = "[{type:optionTypes.PATTERN, patterns : ['test'],message:'not matches with patterns'}, {type:optionTypes.CUSTOM, callback : customErrorValidation,message:'not matches with Custom Validation Callback'}]" #input></sdc-input>
               <div style="margin-top:10px">
                  <button (click)="checkFlag = !checkFlag">Validate!</button> 
               </div>
               <div style="margin-top:10px">
                  Custom Validation Callback to response: {{customErrorValidationResponse}}
               </div>
           `
        },
        {
            id: 'RequiredInput',
            showSource: true,
            context:{
                optionTypes:OptionTypes,
                checkFlag: false,
            },
            title: 'Required input',
            template: `
              <sdc-input label="Please Enter value" [checkValidation]="checkFlag"  [placeHolder]="'Please enter something'" 
              [options] = "[{type:optionTypes.REQUIRED, message:'couldn\\'t be empty'}]" #input></sdc-input>
               <div style="margin-top:10px">
                  <button (click)="checkFlag = !checkFlag">Validate!</button> 
               </div>
           `
        },
        {
            id: 'SimpleInput',
            showSource: true,
            context:{
                optionTypes:OptionTypes,
                checkFlag: false,
            },
            title: 'Simple input',
            template: `
              <sdc-input label="Please Enter value" [checkValidation]="checkFlag"  [placeHolder]="'Please enter something'" #input></sdc-input>
               <div style="margin-top:10px">
                  <button (click)="checkFlag = !checkFlag">Validate!</button> 
               </div>
           `
        },


]);
