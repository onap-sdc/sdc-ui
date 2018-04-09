export type IValidatorFunc = (value: any) => IValidationErrors | null;
export type IValidationErrors = { [key: string]: any } | string[];

export enum ValidatorTypes {
    CALLBACK = 'callback',
    CUSTOM = 'custom',
    REQUIRED = 'required',
    REGEX = 'regex',
    MANUAL = 'manual',
    CONTROL = 'control',
    ASYNC = 'async',
    VALIDATION = 'validation',
    REF = 'ref'
}
