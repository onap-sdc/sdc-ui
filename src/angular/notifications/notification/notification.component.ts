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
    public fade: boolean = false;

    @ViewChild("dynamicContentContainer", {read: ViewContainerRef}) contentContainer:ViewContainerRef;

    constructor(private createDynamicComponentService: CreateDynamicComponentService, private componentFactoryResolver: ComponentFactoryResolver) {
    
    }


    public dismiss():void {
        this.destroyMe();
    }

    public ngOnInit() {
        if(this.notificationSetting.hasNgContent){

            //todo: move this to dynamic component service
            let factory = this.componentFactoryResolver.resolveComponentFactory(this.notificationSetting.innerComponentType);
            let dynamicComponent = factory.create(this.contentContainer.parentInjector);
            this.createDynamicComponentService.projectComponentInputs(dynamicComponent, this.notificationSetting.innerComponentOptions);
            this.contentContainer.insert(dynamicComponent.hostView);
        }


        setTimeout(() =>{
            this.destroyMe();
        }, this.notificationSetting.duration);

    }


    private destroyMe() {

        this.fade = true;
        let self = this;
        setTimeout(() => {
            this.destroyComponent.emit(this.notificationSetting);
        }, 800);
            

    }


}
