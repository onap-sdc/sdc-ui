import { experimentOn } from '@islavi/ng2-component-lab';
import { RegexPatterns } from '../../src/angular/common/enums';

export default experimentOn('Validation')
    .group("Validation", [
        {
            id: 'validationExplain',
            showSource: false,
            title: 'How to use validation',
            description: `
                <pre>
                Validation works on form elements that implememnts XXXXX (checkbox, radio buttons, dropdown, inputs).
                In order to use validation, add to HTML sdc-validation element with reference id ("#"). In the element that is validate
                add [validation]='reference id'.

                Validation can have multiple validator:


                </pre>
            `,
            context: {},
            template: `
            `
        },
        {
            id: 'validation1',
            showSource: true,
            title: 'Simple validation',
            description: 'Simple validation (validating that email is valid and that user inserted something in the field). By default the validation starts after first key press',
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
        }
    ]);
