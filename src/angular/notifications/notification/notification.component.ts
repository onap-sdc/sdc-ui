import {
    Component,
    Input,
    Output,
    EventEmitter,
    ComponentRef,
    OnInit,
    ViewContainerRef,
    ViewChild,
    ComponentFactoryResolver
} from "@angular/core";
import {NotificationSettings} from "../utilities/notification.config";
import {CreateDynamicComponentService} from "../../utils/create-dynamic-component.service";


@Component({
    selector: 'sdc-notification',
    templateUrl: './notification.component.html'
})


export class NotificationComponent implements OnInit {

    @Input() notificationSetting:NotificationSettings;
    @Output() destroyComponent = new EventEmitter<any>();
    @ViewChild("dynamicContentContainer", {read: ViewContainerRef}) contentContainer:ViewContainerRef;
    private fade: boolean = false;

    constructor(private createDynamicComponentService: CreateDynamicComponentService, private componentFactoryResolver: ComponentFactoryResolver) {
    
    }


    public dismiss():void {
        this.destroyMe();
    }

    public ngOnInit() {
        if(this.notificationSetting.hasNgContent){
            this.createDynamicComponentService.insertComponentDynamically(this.notificationSetting.innerComponentType, this.notificationSetting.innerComponentOptions, this.contentContainer);
        }


        setTimeout(() =>{
            this.destroyMe();
        }, this.notificationSetting.duration);

    }


    private destroyMe() {

        this.fade = true;
        setTimeout(() => {
            this.destroyComponent.emit(this.notificationSetting);
        }, 800);
            

    }


}
