/**
 * Created by rc2122 on 5/10/2017.
 */
export interface IModalButtonConfig {
    text:string;
    sdcButtonStyle:string;
    callback:Function;
    closeModal:boolean;
}
export class ModalButtonConfig implements IModalButtonConfig {

    text:string;
    sdcButtonStyle:string;
    callback:Function;
    closeModal:boolean;

    constructor(text?:string, sdcButtonStyle?:string, closeModal?:boolean, buttonClickActionCallback?:Function) {
        this.text = text;
        this.sdcButtonStyle = sdcButtonStyle || 'default';
        this.callback = buttonClickActionCallback;
        this.closeModal = closeModal == null ? true: closeModal;
    }
}
