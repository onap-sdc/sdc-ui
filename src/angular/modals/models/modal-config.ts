import {ModalButtonConfig} from "./modal-button-config";

export interface IModalConfig {

    size?: string; //'xl|l|md|sm|xsm'
    title?: string;
    message?: string;
    buttons?: Array<ModalButtonConfig>;
    type?: string; //'standard|error|alert';
}

export interface ModalConfig {

    size?: string; //'xl|l|md|sm|xsm'
    title?: string;
    message?: string;
    buttons?: Array<ModalButtonConfig>;
    type?: string; //'standard|error|alert';
}



