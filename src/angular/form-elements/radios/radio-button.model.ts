export interface IOptionItem {
    checked: boolean;
    label: string;
    disabled: boolean;
    name: string;
    value: string;
};

export interface IOptionGroup {
    items: IOptionItem[];
};

export enum Directions {
    vertical,
    horizontal
}
