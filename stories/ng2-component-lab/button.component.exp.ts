import {experimentOn} from '@islavi/ng2-component-lab';
function showButtonProps(btnType, btnSize) {
    window.alert(`Clicked!\ntype="${btnType}" size="${btnSize}"`);
};

const buttonTypes = ['primary', 'white', 'gray', 'positive', 'negative', 'warning', 'secondary'];
const buttonSizes = ['large', 'medium', 'small'];
const experiment = experimentOn('Button');
buttonTypes.forEach((buttonType) => {
    [false, true].forEach((buttonDisabled) => {
        experiment.case(`Button ${buttonType}${buttonDisabled ? ' disabled' : ''}`, {
            showSource: true,
            context: {
                showButtonProps
            },
            template: buttonSizes.map((buttonSize) =>
                `<sdc-button text="${buttonType}" type="${buttonType}" size="${buttonSize}" (click)="showButtonProps('${buttonType}', '${buttonSize}')" ${buttonDisabled ? ' [disabled]="true"' : ''}></sdc-button>`).join('\n')
        });
    });
});

export default experiment;
