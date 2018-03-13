export default `
<div class="sdc-dropdown"
 [ngClass]="{'sdc-dropdown__error': error, 'open-bottom': show && bottomVisible, 'open-top':show && !bottomVisible}"
 #dropDownWrapper>
    <label class="sdc-dropdown__label" *ngIf="label" [ngClass]="{'required':required}">{{label}}</label>
    <div class="sdc-dropdown__component-container">
    <!--[DROP-DOWN HEADER START]-->
    <button *ngIf="!headless"
            class="sdc-dropdown__header js-sdc-dropdown--toggle-hook"
            (click)="toggleDropdown()" (blur)="validateDropDown()"
            [ngClass]="{'disabled': disabled,
            'placeholder':!this.selectedOption}">
            {{ this.selectedOption?.label || this.selectedOption?.value || placeHolder}}
            <!--<svg  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                      width="14" height="14" viewBox="0 0 14 14"
                      class="sdc-dropdown-handle js-sdc-dropdown&#45;&#45;toggle-hook">-->
                <!--<defs>-->
                    <!--<path id="chevron-a"
                     d="M5.2998,6.7002 C5.4998,6.9002 5.7998,7.0002 5.9998,7.0002 C6.1998,7.0002 6.4998,6.9002
                        6.6998,6.7002 L11.6998,1.7002 C12.0998,1.3002 12.0998,0.7002 11.6998,0.3002 C11.2998,-0.0998
                        10.6998,-0.0998 10.2998,0.3002 L5.9998,4.6002 L1.6998,0.3002 C1.2998,-0.0998 0.6998,-0.0998
                        0.2998,0.3002 C-0.1002,0.7002 -0.1002,1.3002 0.2998,1.7002 L5.2998,6.7002 Z"/>-->
                <!--</defs>-->
                <!--<g fill="none" fill-rule="evenodd" transform="translate(1 4)">-->
                    <!--<use fill="#000" xlink:href="#chevron-a"/>-->
                <!--</g>-->
            <!--</svg>-->

            <svg  xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"
                  class="sdc-dropdown-handle js-sdc-dropdown--toggle-hook">
                <g fill="none" fill-rule="evenodd" transform="translate(1 4)">
                    <path fill="#000" id="chevron-a"
                     d="M5.2998,6.7002 C5.4998,6.9002 5.7998,7.0002 5.9998,7.0002 C6.1998,7.0002 6.4998,6.9002
                        6.6998,6.7002 L11.6998,1.7002 C12.0998,1.3002 12.0998,0.7002 11.6998,0.3002 C11.2998,-0.0998
                        10.6998,-0.0998 10.2998,0.3002 L5.9998,4.6002 L1.6998,0.3002 C1.2998,-0.0998 0.6998,-0.0998
                        0.2998,0.3002 C-0.1002,0.7002 -0.1002,1.3002 0.2998,1.7002 L5.2998,6.7002 Z"/>
                </g>
            </svg>
    </button>
    <!--[DROP-DOWN HEADER END]-->

    <!--[DROP-DOWN OPTIONS START]-->
    <div class="sdc-dropdown__options-wrapper--frame" [ngClass]="{
    'sdc-dropdown__options-wrapper--top':!bottomVisible,
     'sdc-dropdown__options-wrapper--uncollapsed':show
    }">
        <ul #optionsContainerElement *ngIf="true" class="sdc-dropdown__options-list" [ngClass]="{
        'sdc-dropdown__options-list--headless': headless,
        'sdc-dropdown__options-list--animation-init':animationInit
        }">
            <ng-container  *ngFor="let option of options; let i = index">

                <!--[Drop down item list or string list start]-->
                <li *ngIf="option" class="sdc-dropdown__option"
                    [ngClass]="{
                        'selected': option == selectedOption,
                        'sdc-dropdown__option--group':isGroupDesign,
                        'sdc-dropdown__option--header': option.type && option.type === cIDropDownOptionType.Header,
                        'sdc-dropdown__option--disabled': option.type && option.type === cIDropDownOptionType.Disable,
                        'sdc-dropdown__option--hr': option.type && option.type === cIDropDownOptionType.HorizontalLine
                       }"
                    (click)="selectOption(i, option)">{{option.label || String(option.value)}}</li>
                <!--[Drop down item list or string list end]-->

            </ng-container>
        </ul>
    </div>
    <!--[DROP-DOWN OPTIONS END]-->
    </div>
    <!--[DROP-DOWN ERROR MESSAGE START]-->
    <div class="sdc-dropdown__error--block">
        <svg class="svg-icon __exclamationTriangleFull" version="1.1" id="exclamation-triangle-full_icon" x="0px"
         y="0px" viewBox="0 0 19.9 18" xml:space="preserve"><path class="sdc-dropdown__error--icon"
         d="M19.6,14.3L12,1.3c-0.3-0.6-0.8-1-1.4-1.2C10-0.1,9.3,0,8.7,0.3c-0.4,0.3-0.6,0.6-0.9,1l-7.6,13c-0.3,
         0.5-0.4,1.2-0.2,1.8
	c0.2,0.6,0.6,1.1,1.1,1.4C1.6,17.8,1.9,18,2.4,18h15.1c1.3,0,2.4-1.1,
	2.4-2.4C19.9,15.1,19.8,14.7,19.6,14.3z M10.5,14.2
	c0,0.3-0.2,0.5-0.5,0.5s-0.5-0.2-0.5-0.5l0-1c0-0.3,0.2-0.5,0.5-0.5s0.5,0.2,0.5,0.5L10.5,14.2z M10.5,
	9.9c0,0.3-0.2,0.5-0.5,0.5
	s-0.5-0.2-0.5-0.5l0-5.2c0-0.3,0.2-0.5,0.5-0.5s0.5,0.2,0.5,0.5L10.5,9.9z"></path></svg>Error message!
    </div>
    <!--[DROP-DOWN ERROR MESSAGE END]-->
</div>
`;
