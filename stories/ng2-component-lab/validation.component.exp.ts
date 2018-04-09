import { experimentOn } from '@islavi/ng2-component-lab';
import { RegexPatterns } from '../../src/angular/common/enums';

export default experimentOn('Validation')
    .group("Validation", [
        {
            id: 'validation1',
            showSource: true,
            title: 'Simple validation',
            description: 'Simple validation (validating that email is valid and that user inserted something in the field). By default the validation starts after first key press',
            context: {
                emailPattern: RegexPatterns.email
            },
            template: `
                <sdc-input label="Please enter valid email address" [validation]="emailValidator" [maxLength]="50"></sdc-input>
                <sdc-validation #emailValidator>
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
                numbersPattern: RegexPatterns.numbers
            },
            template: `
                <sdc-input label="Please enter valid email address" [validation]="numberValidator" [maxLength]="10"></sdc-input>
                <sdc-validation #numberValidator>
                    <sdc-regex-validator message="This is not a number!" [pattern]="numbersPattern"></sdc-regex-validator>
                </sdc-validation>
            `
        }
    ]);
