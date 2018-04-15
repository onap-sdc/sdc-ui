export default `
<div class="sdc-dropdown" [ngClass]="{'sdc-dropdown__error': error, 'open-bottom': show && bottomVisible, 'open-top':show && !bottomVisible}" #dropDownWrapper>
<label class="sdc-dropdown__label" *ngIf="label"  [ngClass]="{'required':required}">{{label}}</label>
    <div class="sdc-dropdown__component-container">
    <!--[DROP-DOWN HEADER START]-->
    <div class = "sdc-dropdown-auto__wrapper" *ngIf = "type === cIDropDownTypes.Auto">
        <input  class="sdc-dropdown__header js-sdc-dropdown--toggle-hook" [(ngModel)]="this.filterValue" (ngModelChange)="filterOptions(this.filterValue)" placeholder = "{{this.selectedOption?.label || this.selectedOption?.value || placeHolder}}">
        <div class = "btn-toggle"  (click)="toggleDropdown()">
            <svg-icon-label
                [name]="'caret1-down-o'"
                [mode]="primary"
                [size]="'small'"
                [clickable]="false"
                [disabled]="false"
                >
            </svg-icon-label>
        </div>
    </div>
    <button *ngIf="type === cIDropDownTypes.Regular" 
        class="sdc-dropdown__header js-sdc-dropdown--toggle-hook"
        (click)="toggleDropdown()"
        [ngClass]="{'disabled': disabled, 'placeholder':!this.selectedOption}">{{ this.selectedOption?.label || this.selectedOption?.value || placeHolder}}
        <!--<svg  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="14" height="14" viewBox="0 0 14 14" class="sdc-dropdown-handle js-sdc-dropdown&#45;&#45;toggle-hook">-->
            <!--<defs>-->
                <!--<path id="chevron-a" d="M5.2998,6.7002 C5.4998,6.9002 5.7998,7.0002 5.9998,7.0002 C6.1998,7.0002 6.4998,6.9002 6.6998,6.7002 L11.6998,1.7002 C12.0998,1.3002 12.0998,0.7002 11.6998,0.3002 C11.2998,-0.0998 10.6998,-0.0998 10.2998,0.3002 L5.9998,4.6002 L1.6998,0.3002 C1.2998,-0.0998 0.6998,-0.0998 0.2998,0.3002 C-0.1002,0.7002 -0.1002,1.3002 0.2998,1.7002 L5.2998,6.7002 Z"/>-->
            <!--</defs>-->
            <!--<g fill="none" fill-rule="evenodd" transform="translate(1 4)">-->
                <!--<use fill="#000" xlink:href="#chevron-a"/>-->
            <!--</g>-->
        <!--</svg>-->
        <svg  xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" class="sdc-dropdown-handle js-sdc-dropdown--toggle-hook" style="padding-top: 2px;">
            <g fill="none" fill-rule="evenodd" transform="translate(1 4)">
                <path fill="#000" id="chevron-a" d="M5.2998,6.7002 C5.4998,6.9002 5.7998,7.0002 5.9998,7.0002 C6.1998,7.0002 6.4998,6.9002 6.6998,6.7002 L11.6998,1.7002 C12.0998,1.3002 12.0998,0.7002 11.6998,0.3002 C11.2998,-0.0998 10.6998,-0.0998 10.2998,0.3002 L5.9998,4.6002 L1.6998,0.3002 C1.2998,-0.0998 0.6998,-0.0998 0.2998,0.3002 C-0.1002,0.7002 -0.1002,1.3002 0.2998,1.7002 L5.2998,6.7002 Z"/>
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
        'sdc-dropdown__options-list--animation-init':animation_init
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
</div>
`;