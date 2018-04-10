import { Input, Component } from "@angular/core";
import { ValidationComponent } from './validation.component';
import { Subject } from 'rxjs/Subject';

export class ValidatableComponent {

    // Each ValidatableComponent should handle the style in case of error, according to this boolean
    public valid = true;

    // Each ValidatableComponent will notify when the value is changed.
    public notifier: Subject<string>;

    constructor() {
        this.notifier = new Subject();
    }

    // Each ValidatableComponent should call the valueChanged on value changed function.
    protected valueChanged = (value: any): void => {
        this.notifier.next(value);
    }

}
