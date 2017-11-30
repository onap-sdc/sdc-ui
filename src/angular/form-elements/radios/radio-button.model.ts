export interface IRadioButtonModel {
    label: string;
    disabled: boolean;
    name: string;
    value: string;
};

export interface IOptionGroup {
    items: IRadioButtonModel[];
};

export enum Direction {
    vertical,
    horizontal
}
