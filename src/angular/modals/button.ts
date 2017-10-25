/**
 * Created by rc2122 on 5/10/2017.
 */
export class ButtonModel {
    text:string;
    type:string;
    callback:Function;
    closeModal: boolean;

    constructor(text?:string, type?:string, closeModal?: boolean, buttonClickActionCallback?:Function) {
        this.text = text;
        this.type = type;
        this.callback = buttonClickActionCallback;
        this.closeModal = closeModal;

    }
}
