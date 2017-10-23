/**
 * Created by rc2122 on 5/10/2017.
 */
export class ButtonModel {
    text:string;
    type:string;
    callback:Function;
    onActionDoneCallback:Function;

    constructor(text?:string, type?:string, buttonClickActionCallback?:Function, onActionDoneCallback?:Function) {
        this.text = text;
        this.type = type;
        this.onActionDoneCallback = onActionDoneCallback;
        this.callback = ()=> {
           let promise = new Promise((resolve, reject) => {
                let response = buttonClickActionCallback();
                resolve(response);
            });

            //noinspection TypeScriptValidateTypes
            promise.then((response)=>{
                this.onActionDoneCallback();
            });

            return promise;
        }

    }
}
