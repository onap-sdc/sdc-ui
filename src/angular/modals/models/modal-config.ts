export interface IModalConfig {
    size?: string; // xl|l|md|sm|xsm
    title?: string;
    message?: string;
    buttons?: IModalButtonComponent[];
    testId?: string;
    type?: string; // 'info|error|alert';
}

export interface IButtonComponent {
    text: string;
    disabled?: boolean;
    type?: string;
    testId?: string;
    size?: string;
}

export interface IModalButtonComponent extends IButtonComponent{
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
