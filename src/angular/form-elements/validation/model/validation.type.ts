import {ValidationControl} from "./validation-control.model";

export interface IValidationControl {
    isValid: boolean;
    errorsDict: IValidationErrorsDict;
    errors: string[];

    // reset validation
    reset(): void;

    // validates the input value and sets errors and isValid (returns isValid)
    validate(value: any): boolean;
}

export enum ValidatorTypes {
    CHILD = 'child',
    SIBLING = 'sibling',
    CUSTOM = 'custom',
    REQUIRED = 'required',
    REGEX = 'regex',
    MANUAL = 'manual'
}

export interface IValidator {
    type: ValidatorTypes;
    name?: string;
    message?: string;
    disabled?: boolean;
    stop?: boolean;

    // validation validator
    validation?: ValidationControl;

    // regex validator
    patterns?: RegExp[];

    // custom validator
    callback?: (value: any) => string|string[]|null;

    // manual validator
    isError?: boolean;
}

export interface IValidationErrorsDict {
    [key: string]: string[];
}

export interface IValidationChange {
    isValid: boolean;
    errors: string[];
    errorsDict: IValidationErrorsDict;
}

export interface IValidationChildrenDict {
    [key: string]: ValidationControl;
}
