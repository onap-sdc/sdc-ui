export interface Ipattern{
    regex: string;
};

export enum OptionTypes {
    CUSTOM,
    REQUIRED,
    PATTERN
};

export interface IOption{
    type: OptionTypes;
    message: string;
    patterns?: Ipattern[];
    callback?: (payload)=>{};
};

export interface ICheck{
    result:boolean;
    error:string;
};

export class CheckModel implements ICheck {
    constructor(public result: boolean, public error: string){};
};
