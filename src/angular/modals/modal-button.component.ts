import { Component, Input} from "@angular/core";
import { ButtonComponent } from "../buttons/button.component";
import { ModalService } from "./modal.service";

@Component({
    selector: "sdc-modal-button",
    templateUrl: "./modal-button.component.html"
})
export class ModalButtonComponent extends ButtonComponent {
    @Input() public callback: Function; 
    @Input() public closeModal: boolean = false;
    
    constructor(private modalService:ModalService){
        super();
    }

    public invokeCallback = ():void => {
        if(this.callback){
            this.callback();
        }
        if(this.closeModal){
            this.modalService.closeModal();
        }
    }
}
