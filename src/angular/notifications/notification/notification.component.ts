import {Component, Input, Output, EventEmitter, ComponentRef, Type, OnInit, OnChanges, SimpleChanges, ComponentFactory, ComponentFactoryResolver, ViewContainerRef, ViewChild} from "@angular/core";
import {ContentService} from "../services/content.service";
import {NotificationSettings} from "../utilities/notification.config";
// import template from './notification1.component.html';

@Component({
    selector: 'sdc-notification',
    templateUrl: './notification.component.html'
})

// template: template

export class NotificationComponent implements OnInit, OnChanges {

    @Input() position: string = 'top';
    @Input() duration: number = 10000;
    @Input() type: string;
    @Input() notifyTitle: string;
    @Input() notifyText: string;
    @Input() fade: boolean;
    @Input() sticky: boolean;
    @Input() location: string;
    @Input() hasNgContent : boolean;
    @Input() notificationSetting : NotificationSettings;
    @Input() innerContentClass : Type<any>;
    @Input() options :any;
    @Output() destroyComponent = new EventEmitter<any>();

    hasContent : boolean = false;

    public destroy : boolean = false;

    public transheight : boolean = false;

    @ViewChild("dynamicContentContainer", { read: ViewContainerRef }) contentContainer;

    contentComponentType:Type<any> ;

    private innerNotificationContent:ComponentRef<any>;

    constructor(private resolver: ComponentFactoryResolver){

    }


    private addCustomContent = (contentComponentType:Type<any>, options:any = {}) => {
        const factory: ComponentFactory<any> = this.resolver.resolveComponentFactory(contentComponentType);
        this.innerNotificationContent = this.contentContainer.createComponent(factory);
        this.projectComponentInputs(this.innerNotificationContent, options);
    }

    private projectComponentInputs(component:ComponentRef<any>, options:any):ComponentRef<any> {
        if (options) {
            const props = Object.getOwnPropertyNames(options);
            for (const prop of props) {
                component.instance[prop] = options[prop];
            }
        }
        return component;
    }

    public dismiss(): void {
        console.log("clicked dismiss");
        this.destroyMe();
    }

    public ngOnInit(){


        console.log("NotificationComponent:ngOnInit start");

        console.log("ngOnInit hasNgContent="+JSON.stringify(this.hasNgContent))

        // add here creation of custom content
        if ( typeof this.innerContentClass !==  'undefined' &&
            typeof this.innerContentClass === "string" ) {
            // add inner content
            if (String(this.innerContentClass).length > 0) {
                this.addCustomContent(this.innerContentClass, this.options);
            }
        }

        let self = this;
        setTimeout( function(){
            self.destroyMe();
            }, self.duration);

    }


    public hasDynamicContent() : boolean {
        console.log("hasDynamicContent hasNgContent="+JSON.stringify(this.hasNgContent));
        console.log("hasDynamicContent hasContent="+JSON.stringify(this.hasContent));
        //return false;
        return this.hasContent;
    }

    public ngOnChanges(changes: SimpleChanges){
        console.log("ngOnChanges changes = "+JSON.stringify(changes));
        let changesHasNgContent = changes['hasNgContent'];
        if (changesHasNgContent && changesHasNgContent.currentValue){
            //this.hasContent = this.hasNgContent;
            console.log("ngOnChanges hasNgContent="+JSON.stringify(this.hasNgContent));
            if (typeof this.hasNgContent ===  "boolean") {
                this.hasContent = this.hasNgContent;
            }
            else if (typeof this.hasNgContent ===  "string"){
                this.hasContent = this.hasNgContent == "true" ? true : false;
            }
            else{
                this.hasContent = false;
            }
        }

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
