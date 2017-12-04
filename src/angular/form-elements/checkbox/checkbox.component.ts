import {Component, Input, Output, EventEmitter, ViewEncapsulation} from '@angular/core';


@Component({
    selector: 'sdc-checkbox',
    templateUrl: './checkbox.component.html',
    encapsulation: ViewEncapsulation.None
})

export class CheckboxComponent {
    @Input() label:string;
    @Input() checked:boolean;
    @Input() disabled:boolean;
    @Output() checkedChange:EventEmitter<any> = new EventEmitter<any>();

    public toggleState(new_state:boolean) {
        if(!this.disabled){
                this.checked = new_state;
                this.checkedChange.emit(new_state);
            }
        }
}

