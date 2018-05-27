import { Placement } from "../../common/enums";
import { IButtonComponent } from "../../buttons/ibutton.interface";

export interface IModalConfig {
    size?: string; // xl|l|md|sm|xsm
    title?: string;
    message?: string;
    buttons?: IModalButtonComponent[];
    testId?: string;
    type?: string; // 'info|error|alert';
}

export interface IModalButtonComponent extends IButtonComponent {
    id?: string;
    callback?: Function;
    closeModal?: boolean;
}

export enum ModalType {
    alert = "alert",
    error = "error",
    standard = "info",
    custom = "custom"
}

export enum ModalSize {
    xlarge = "xl",
    large = "l",
    medium = "md",
    small = "sm",
    xsmall = "xsm"
}
