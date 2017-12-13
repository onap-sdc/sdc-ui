import {Component, Input, Output, EventEmitter} from "@angular/core";
import {CommonModule} from "@angular/common";
import {NotificationType} from "../utilities/notification.config";
//import { trigger, state, style, animate, transition} from '@angular/animations';


@Component({
    selector: "sdc-notification",
    templateUrl: './notification.component.html'
})
export class NotificationComponent {

    @Input() position: string = 'top';
    @Input() duration: number = 10000;
    @Input() type: string;
    @Input() notifyTitle: string;
    @Input() notifyText: string;
    @Input() fade: boolean;
    @Input() sticky: boolean;
    @Input() location: string;
    @Output() destroyComponent = new EventEmitter<any>();

    public destroy : boolean = false;
    public transheight : boolean = false;

    public dismiss(): void {
        console.log("clicked dismiss");
        this.destroyMe();
    }

    public ngOnInit(){

        console.log("NotificationComponent:ngOnInit start");

        let self = this;
        setTimeout( function(){
            self.destroyMe();
            }, self.duration);

    }

    private fadeOut(){
        this.fade = true;
    }

    private destroyMe(){
        this.fadeOut();
        let self = this;
        setTimeout(function(){
            self.transheight = true;

            let event = {
                destroy: true,
                item: self
            }

            self.destroy = true;

            setTimeout(function (){
                self.destroyComponent.emit(event);
            }, 2000);

        }, 800);
    }


}
