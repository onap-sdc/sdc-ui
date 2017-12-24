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
        // {
        //     id: 'validation-input-value',
        //     showSource: true,
        //     title: 'Regular Input Validation (using input\'s value)',
        //     description: 'Input validation using the input\'s "value" attribute',
        //     context: commonContext,
        //     template: `
        //         <div><input placeholder="Please Enter value" (input)="value=$event.target.value"></div>
        //         <div><label><input type="checkbox" [(ngModel)]="enable"> Enable validation</label></div>
        //         <div><label><input type="checkbox" [(ngModel)]="manualError"> Show manual error</label></div>
        //         <sdc-validation [value]="value" [disabled]="!enable" #validationComp>
        //             <sdc-validator type="manual" message="You chose to show this error!" [isError]="manualError" [stop]="true"></sdc-validator>
        //             <sdc-validator name="v_required" type="required" message="This field is REQUIRED!" [stop]="true"></sdc-validator>
        //             <sdc-validator name="startLetter" type="regex" message="Value should start with a letter!" [patterns]="[['^[a-z]', 'i']]"></sdc-validator>
        //             <sdc-validator type="regex" message="Value should end with a digit!" [patterns]="['\\\\d$']"></sdc-validator>
        //             <sdc-validator name="myCustomValidator" type="custom" [callback]="validatorCallback"></sdc-validator>
        //         </sdc-validation>
        //         <b>is valid? {{ validationComp.validation.isValid }}</b>
        //     `
        // },
        // {
        //     id: 'validation-sdc-input-changeValue',
        //     showSource: true,
        //     title: 'SDC Input Validation (using its baseEmitter - changeValue)',
        //     description: 'SDC Input validation using the SDC input\'s "valueChange" emitter (baseEmitter)',
        //     context: commonContext,
        //     template: `
        //         <div><sdc-input placeholder="Please Enter value" #sdcInput></sdc-input> (blur text box to trigger validate)</div>
        //         <div><label><input type="checkbox" [(ngModel)]="enable"> Enable validation</label></div>
        //         <div><label><input type="checkbox" [(ngModel)]="manualError"> Show manual error</label></div>
        //         <sdc-validation [valueEmitter]="sdcInput.baseEmitter" [disabled]="!enable" (validChange)="log($event)" #validationComp>
        //             <sdc-validator type="manual" message="You chose to show this error!" [isError]="manualError" [stop]="true"></sdc-validator>
        //             <sdc-validator name="v_required" type="required" message="This field is REQUIRED!" [stop]="true"></sdc-validator>
        //             <sdc-validator name="startLetter" type="regex" message="Value should start with a letter!" [patterns]="[['^[a-z]', 'i']]"></sdc-validator>
        //             <sdc-validator type="regex" message="Value should end with a digit!" [patterns]="['\\\\d$']"></sdc-validator>
        //             <sdc-validator name="myCustomValidator" type="custom" [callback]="validatorCallback"></sdc-validator>
        //         </sdc-validation>
        //         <b>is valid? {{ validationComp.validation.isValid }}</b>
        //     `
        // },
        {
            id: 'validation-input-child-sibling',
            showSource: true,
            title: 'Complex validation with child and sibling',
            description: 'Complex validation with validators of type "child" and "sibling"',
            context: Object.assign({}, commonContext, {
                enableChild: true,
                enableSibling: true
            }),
            template: `
                <div>Parent: <input placeholder="Please Enter value" (input)="parentValue=$event.target.value"></div>
                <sdc-validation [value]="parentValue" (validChange)="log('Parent validation:', $event)" #validationComp>
                    <sdc-validator name="v_required" type="required" message="This field is REQUIRED!" [stop]="true"></sdc-validator>
                    <sdc-validator name="child" type="child" [validation]="childValidationComp.validation" [show]="false"></sdc-validator>
                    <sdc-validator name="child2" type="child" [validation]="child2ValidationComp.validation"></sdc-validator>
                </sdc-validation>
                <div>Child: <input placeholder="Please Enter value" (input)="childValue=$event.target.value"></div>
                <sdc-validation [value]="childValue" [disabled]="!enableChild" [show]="true" (validChange)="log('Child validation:', $event)" #childValidationComp>
                    <sdc-validator name="v_required" type="required" message="This field is REQUIRED!" [stop]="true"></sdc-validator>
                    <sdc-validator name="startLetter" type="regex" message="Value should start with a letter!" [patterns]="[['^[a-z]', 'i']]"></sdc-validator>
                    <sdc-validator type="regex" message="Value should end with a digit!" [patterns]="['\\\\d$']"></sdc-validator>
                    <sdc-validator name="sibling" type="sibling" [validation]="siblingValidationComp.validation"></sdc-validator>
                </sdc-validation>
                <sdc-validation [value]="childValue" [disabled]="!enableSibling" [show]="false" (validChange)="log('Sibling (of child) validation:', $event)" #siblingValidationComp>
                    <sdc-validator name="myCustomValidator" type="custom" [callback]="validatorCallback"></sdc-validator>
                </sdc-validation>
                <sdc-validation [value]="childValue" [disabled]="!enableChild" [show]="false" (validChange)="log('Child2 validation:', $event)" #child2ValidationComp>
                    <sdc-validator type="regex" [patterns]="['^[A-Z]']" message="Start with CAPITAL!"></sdc-validator>
                </sdc-validation>
                <b>is valid? {{ validationComp.validation.isValid }}</b>
                <div><label><input type="checkbox" [(ngModel)]="enableSibling"> Enable sibling validation</label></div>
                <div><label><input type="checkbox" [(ngModel)]="enableChild"> Enable child validation</label></div>
            `
        },
    ]);
