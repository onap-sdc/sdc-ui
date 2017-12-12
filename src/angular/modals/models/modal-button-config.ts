/**
 * Created by rc2122 on 5/10/2017.
 */

export interface IModalButtonConfig {
    text:string;
    type:string;
    callback:Function;
    closeModal:boolean;
}
export class ModalButtonConfig implements IModalButtonConfig {

    text:string;
    type:string;
    callback:Function;
    closeModal:boolean;

    constructor(text?:string, type?:string, closeModal?:boolean, buttonClickActionCallback?:Function) {
        this.text = text || 'Close';
        this.type = type || 'primary';
        this.callback = buttonClickActionCallback;
        this.closeModal = closeModal == null ? true: closeModal;
    }
}
