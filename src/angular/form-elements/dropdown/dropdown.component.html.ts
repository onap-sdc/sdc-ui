export default `
<div class="sdc-dropdown" #dropDownWrapper
    [ngClass]="{
    'headless': type === cIDropDownTypes.Headless,
    'sdc-dropdown__error': !valid,
    'open-bottom': show && bottomVisible,
    'open-top':show && !bottomVisible}">
    <label *ngIf="label" class="sdc-dropdown__label" [ngClass]="{'required':required}">{{label}}</label>
    <div class="sdc-dropdown__component-container">

        <!--[DROP-DOWN AUTO HEADER START]-->
        <div *ngIf="type===cIDropDownTypes.Auto" class="sdc-dropdown-auto__wrapper">
            <input class="sdc-dropdown__header js-sdc-dropdown--toggle-hook"
                    [attr.data-tests-id]="testId"
                    [(ngModel)]="this.filterValue"
                    (ngModelChange)="filterOptions(this.filterValue)"
                    placeholder="{{this.selectedOption?.label || this.selectedOption?.value || placeHolder}}">
                <svg-icon name="caret1-down-o" mode="secondary" size="small" (click)="toggleDropdown($event)"></svg-icon>
        </div>
        <!--[DROP-DOWN AUTO HEADER END]-->

        <!--[DROP-DOWN REGULAR HEADER START]-->
        <button *ngIf="type===cIDropDownTypes.Regular"
                class="sdc-dropdown__header js-sdc-dropdown--toggle-hook"
                [attr.data-tests-id]="testId"
                (click)="toggleDropdown($event)"
                [ngClass]="{'disabled': disabled, 'placeholder':!this.selectedOption}">
                {{ this.selectedOption?.label || this.selectedOption?.value || placeHolder}}
            <svg-icon name="caret1-down-o" mode="secondary" size="small"></svg-icon>
        </button>
        <!--[DROP-DOWN HEADER END]-->

        <!--[DROP-DOWN OPTIONS START]-->
        <div class="sdc-dropdown__options-wrapper--frame" [ngClass]="{
        'sdc-dropdown__options-wrapper--top':!bottomVisible,
        'sdc-dropdown__options-wrapper--uncollapsed':show
        }">
            <ul #optionsContainerElement *ngIf="options" class="sdc-dropdown__options-list" [ngClass]="{
            'sdc-dropdown__options-list--headless': headless,
            'sdc-dropdown__options-list--animation-init':animation_init
            }">
                <ng-container *ngFor="let option of options; let i = index">
                    <!--[Drop down item list or string list start]-->
                    <li *ngIf="option" class="sdc-dropdown__option"
                        [ngClass]="{
                            'selected': option == selectedOption,
                            'sdc-dropdown__option--group':isGroupDesign,
                            'sdc-dropdown__option--header': option.type && option.type === cIDropDownOptionType.Header,
                            'sdc-dropdown__option--disabled': option.type && option.type === cIDropDownOptionType.Disable,
                            'sdc-dropdown__option--hr': option.type && option.type === cIDropDownOptionType.HorizontalLine
                        }"
                        (click)="selectOption(option.value, $event)">{{option.label || String(option.value)}}</li>
                    <!--[Drop down item list or string list end]-->
                </ng-container>
            </ul>
        </div>
        <!--[DROP-DOWN OPTIONS END]-->

    </div>
</div>
`;
