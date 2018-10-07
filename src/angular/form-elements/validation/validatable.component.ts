import { Input, Component } from "@angular/core";
import { ValidationComponent } from './validation.component';
import { Subject } from 'rxjs/Subject';
import { IValidatableComponent } from './validatable.interface';

export abstract class ValidatableComponent implements IValidatableComponent {

    // Each ValidatableComponent should handle the style in case of error, according to this boolean
    public valid: boolean;
    public dirty: boolean;
    // Each ValidatableComponent will notify when the value is changed.
    public notifier: Subject<string>;

    constructor() {
        this.notifier = new Subject();
        this.dirty = false;
    }

    public abstract getValue(): any;

    // Each ValidatableComponent should call the valueChanged on value changed function.
    protected valueChanged = (value: any): void => {
        this.dirty = true;
        this.notifier.next(value);
    }

}
