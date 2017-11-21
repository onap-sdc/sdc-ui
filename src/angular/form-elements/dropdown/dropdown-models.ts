/**
 * Created by M.S.BIT on 19/11/2017.
 */

/**
 * Represnts a single item/option of drop-down component
 */
export interface IDropDownItem {
    value:any;
    label:string;
}

/**
 * Represents a group of options in a drop-down component
 */
export interface IDropDownGroup {
    items: IDropDownItem[],
    title: string;
}


export interface IDropDownGroupResult{
    group: IDropDownGroup;
    value: string;
}
