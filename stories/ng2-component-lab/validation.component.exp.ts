import { experimentOn } from '@islavi/ng2-component-lab';
import { RegexPatterns } from '../../src/angular/common/enums';
import { DropDownOptionType, IDropDownOption } from './../../src/angular/form-elements/dropdown/dropdown-models';

const options1: IDropDownOption[] = [
    {
        label: 'First Option',
        value: 'First Option',
    },
    {
        label: 'Second Option',
        value: 'Second Option',
    },
    {
        label: 'Third Option',
        value: 'Third Option',
        type: DropDownOptionType.Simple
    }
];

export default experimentOn('Validation')
    .group("Validation", [
        {
            id: 'validation1',
            showSource: true,
            title: 'Simple validation',
            description: 'Simple validation (validating that email is valid and that user inserted something in the field). \
                            By default the validation starts after first key press',
            context: {
                emailPattern: RegexPatterns.email
            },
            template: `
                <sdc-input #email label="Please enter valid email address" [maxLength]="50" required="true"></sdc-input>
                <sdc-validation [validateElement]="email">
                    <sdc-required-validator message="Field is required!"></sdc-required-validator>
                    <sdc-regex-validator message="This is not a valid email!" [pattern]="emailPattern"></sdc-regex-validator>
                </sdc-validation>
            `
        },
        {
            id: 'validation2',
            showSource: true,
            title: 'Simple validation',
            description: 'Simple validation',
            context: {
                numbersPattern: RegexPatterns.numbers,
                isValueHundred: (value: any) => {
                    return (Number(value) === 100) ? true : false;
                }
            },
            template: `
                <sdc-input #numberValidator label="Please enter some number" [maxLength]="10" required="true"></sdc-input>
                <sdc-validation [validateElement]="numberValidator">
                    <sdc-regex-validator message="This is not a number!" [pattern]="numbersPattern"></sdc-regex-validator>
                    <sdc-custom-validator message="The number should be 100" [callback]="isValueHundred"></sdc-custom-validator>
                </sdc-validation>
            `
        },
        {
            id: 'validation3',
            showSource: true,
            title: 'Disabled validation',
            description: 'Disabled validation',
            context: {
                emailPattern: RegexPatterns.email
            },
            template: `
                <sdc-input #email label="Please enter valid email address" [maxLength]="50" required="true"></sdc-input>
                <sdc-validation [validateElement]="email" disabled='true'>
                    <sdc-required-validator message="Field is required!"></sdc-required-validator>
                    <sdc-regex-validator message="This is not a valid email!" [pattern]="emailPattern"></sdc-regex-validator>
                </sdc-validation>
            `
        },
        {
            id: 'validation4',
            showSource: true,
            title: 'Validation with value already entered',
            description: 'Validation with value already entered',
            context: {
                emailPattern: RegexPatterns.email
            },
            template: `
                <sdc-input #email label="Please enter valid email address" [maxLength]="50" required="true" value="notvalidemail@"></sdc-input>
                <sdc-validation [validateElement]="email">
                    <sdc-required-validator message="Field is required!"></sdc-required-validator>
                    <sdc-regex-validator message="This is not a valid email!" [pattern]="emailPattern"></sdc-regex-validator>
                </sdc-validation>
            `
        },
        {
            id: 'validation5',
            showSource: true,
            title: 'Validation with validity changed callback',
            description: 'Simple validation with log in the console when validity changes',
            context: {
                numbersPattern: RegexPatterns.numbers,
                validityChanged: (newState: boolean) => {
                    console.log("Validity has changed to " + newState);
                }
            },
            template: `
                <sdc-input #validatorWithCallback label="Please enter a number" [maxLength]="10" required="true"></sdc-input>
                <sdc-validation [validateElement]="validatorWithCallback" (validityChanged)="validityChanged($event)">
                    <sdc-regex-validator message="This is not a number!" [pattern]="numbersPattern"></sdc-regex-validator>
                </sdc-validation>
            `
        },
        {
            id: 'dropdownWithValidation',
            showSource: true,
            context: {
                options: options1,
                isThirdOption: (value: any) => {
                    return value === 'Third Option';
                }
            },
            title: 'DropDown with validation',
            description: 'DropDown with validation',
            template: `
            <sdc-dropdown #mydropdown label="Hi I am a label" placeHolder="Please choose option" [options]="options"></sdc-dropdown>
            <sdc-validation [validateElement]="mydropdown">
                <sdc-required-validator message="Field is required!"></sdc-required-validator>
                <sdc-custom-validator message="Please select the third option" [callback]="isThirdOption"></sdc-custom-validator>
            </sdc-validation>
            `
        },
        {
            id: 'validationGroup',
            showSource: true,
            context: {
                options: options1,
                emailPattern: RegexPatterns.email,
                isThirdOption: (value: any) => {
                    return value === 'Third Option';
                },
                validateGroup: (validationGroup) => {
                    validationGroup.validate();
                }
            },
            title: 'Validation group',
            description: 'Validation group (activating validation from code)',
            template: `
            <sdc-validation-group #validationGroup>

                <sdc-input #email label="Please enter valid email address" [maxLength]="50" required="true"></sdc-input>
                <sdc-validation [validateElement]="email">
                    <sdc-required-validator message="Field is required!"></sdc-required-validator>
                    <sdc-regex-validator message="This is not a valid email!" [pattern]="emailPattern"></sdc-regex-validator>
                </sdc-validation>

                <sdc-dropdown #mydropdown label="Hi I am a label" placeHolder="Please choose option" [options]="options"></sdc-dropdown>
                <sdc-validation [validateElement]="mydropdown">
                    <sdc-required-validator message="Field is required!"></sdc-required-validator>
                    <sdc-custom-validator message="Please select the third option" [callback]="isThirdOption"></sdc-custom-validator>
                </sdc-validation>

            </sdc-validation-group>
            <sdc-button text="validate group" (click)="validateGroup(validationGroup)"></sdc-button>
            `
        }
    ]);
