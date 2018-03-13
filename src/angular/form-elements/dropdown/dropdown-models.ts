/**
 * Created by M.S.BIT on 19/11/2017.
 */

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
