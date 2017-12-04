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

export interface IOptionCustom extends IOption{
    type: OptionTypes.CUSTOM;
    callback: (payload)=>{};
};

export interface IOptionPattern extends IOption{
    type: OptionTypes.PATTERN;
    patterns?: Ipattern[];
};

export interface IOptionRequired extends IOption{
    type: OptionTypes.REQUIRED;

};

export interface ICheck{
    result:boolean;
    error:string;
};

export class CheckModel implements ICheck {
    constructor(private _result: boolean, private _error: string){};
    public get result():boolean{
        return this._result;
    }
    public set result(value:boolean) {
        this._result = value;
    }
    public get error() :string{
        return this._error;
    }
    public set error(message:string){
        this._error = message;
    }

};
