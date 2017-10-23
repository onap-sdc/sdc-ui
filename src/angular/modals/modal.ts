import {ButtonModel} from "./button";

export interface IModalConfig {

    size?: string; //'xl|l|md|sm|xsm'
    title?: string;
    message?: string;
    buttons?: Array<ButtonModel>;
    type?: string; //'standard|error|alert';
    onClose?:Function;

}

