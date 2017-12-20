/**
 * Created by ob0695 on 10/3/2017.
 */
import {experimentOn} from '@islavi/ng2-component-lab';

const commonContext = {
    enable: true,
    manualError: false,
    validatorCallback: (value) => {
        const errors: string[] = [];
        if (!value || !value.endsWith('0')) {
            errors.push('--- Try put \'0\' at the end');
        }
        if (value && value.length > 5) {
            errors.push('--- Try shorten the value up to 5 characters');
        }
        return errors.length ? errors : null;
    },
    log: function() { console.log.apply(null, arguments); }
};

export default experimentOn('Validation')
    .group("Validation",[
        {
            id: 'validation-input-value',
            showSource: true,
            title: 'Regular Input Validation (using input\'s value)',
            description: 'Input validation using the input\'s "value" attribute',
            context: commonContext,
            template: `
                <div><input placeholder="Please Enter value" (input)="value=$event.target.value"></div>
                <div><label><input type="checkbox" [(ngModel)]="enable"> Enable validation</label></div>
                <div><label><input type="checkbox" [(ngModel)]="manualError"> Show manual error</label></div>
                <sdc-validation [value]="value" [disabled]="!enable" #validationComp>
                    <sdc-validator type="manual" message="You chose to show this error!" [isError]="manualError" [stop]="true"></sdc-validator>
                    <sdc-validator name="v_required" type="required" message="This field is REQUIRED!" [stop]="true"></sdc-validator>
                    <sdc-validator name="startLetter" type="regex" message="Value should start with a letter!" [patterns]="[['^[a-z]', 'i']]"></sdc-validator>
                    <sdc-validator type="regex" message="Value should end with a digit!" [patterns]="['\\\\d$']"></sdc-validator>
                    <sdc-validator name="myCustomValidator" type="custom" [callback]="validatorCallback"></sdc-validator>
                </sdc-validation>
                <b>is valid? {{ validationComp.validation.isValid }}</b>
            `
        },
        {
            id: 'validation-sdc-input-changeValue',
            showSource: true,
            title: 'Regular Input Validation (using input\'s value)',
            description: 'Input validation using the input\'s "value" attribute',
            context: commonContext,
            template: `
                <div><sdc-input placeholder="Please Enter value" #sdcInput></sdc-input> (blur text box to trigger validate)</div>
                <div><label><input type="checkbox" [(ngModel)]="enable"> Enable validation</label></div>
                <div><label><input type="checkbox" [(ngModel)]="manualError"> Show manual error</label></div>
                <sdc-validation [valueEmitter]="sdcInput.baseEmitter" [disabled]="!enable" (validChange)="log($event)" #validationComp>
                    <sdc-validator type="manual" message="You chose to show this error!" [isError]="manualError" [stop]="true"></sdc-validator>
                    <sdc-validator name="v_required" type="required" message="This field is REQUIRED!" [stop]="true"></sdc-validator>
                    <sdc-validator name="startLetter" type="regex" message="Value should start with a letter!" [patterns]="[['^[a-z]', 'i']]"></sdc-validator>
                    <sdc-validator type="regex" message="Value should end with a digit!" [patterns]="['\\\\d$']"></sdc-validator>
                    <sdc-validator name="myCustomValidator" type="custom" [callback]="validatorCallback"></sdc-validator>
                </sdc-validation>
                <b>is valid? {{ validationComp.validation.isValid }}</b>
            `
        }
    ]);
