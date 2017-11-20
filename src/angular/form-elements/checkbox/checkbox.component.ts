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
    @Input() value: any;
    @Output() checkedChange:EventEmitter<any> = new EventEmitter<any>();

    public toggleState(new_value:boolean) {
        this.value.state = new_value;
        this.checkedChange.emit(this.value);
        alert(this.value.name + ' ' + this.value.state);
    }
}

