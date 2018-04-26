export enum DropDownTypes {
    Regular,
    Headless,
    Auto
}

export enum DropDownOptionType {
    Simple, // default
    Header,
    Disable,
    HorizontalLine
}

export interface IDropDownOption {
    value: any;
    label: string;
    type?: DropDownOptionType;
}
