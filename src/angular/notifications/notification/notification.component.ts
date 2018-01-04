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

    hasContent:boolean = false;
    public fade: boolean = false;
    public destroy:boolean = false;
    public transheight:boolean = false;

    @ViewChild("dynamicContentContainer", {read: ViewContainerRef}) contentContainer:ViewContainerRef;

    constructor(private createDynamicComponentService: CreateDynamicComponentService, private componentFactoryResolver: ComponentFactoryResolver) {
    
    }


    public dismiss():void {
        this.destroyMe();
    }

    public ngOnInit() {
        if(this.notificationSetting.hasNgContent){

            let factory = this.componentFactoryResolver.resolveComponentFactory(this.notificationSetting.innerComponentType);
            let dynamicComponent = factory.create(this.contentContainer.parentInjector);
            this.createDynamicComponentService.projectComponentInputs(dynamicComponent, this.notificationSetting.innerComponentOptions);
            this.contentContainer.insert(dynamicComponent.hostView);
        }


        setTimeout(() =>{
            this.destroyMe();
        }, this.notificationSetting.duration);

    }


    private fadeOut() {
        this.fade = true;
    }

    private destroyMe() {
        this.fadeOut();
        let self = this;
        setTimeout(function () {
            self.transheight = true;

            let event = {
                destroy: true,
                item: self
            }

            self.destroy = true;

            setTimeout(function () {
                self.destroyComponent.emit(event);
            }, 2000);

        }, 800);
    }


}
