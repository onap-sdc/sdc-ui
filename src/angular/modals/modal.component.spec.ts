import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, Input, NgModule, ViewContainerRef, Inject, Injectable, Type, ApplicationRef, ComponentFactoryResolver, ComponentRef,
    EmbeddedViewRef, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal.component';
import { NO_ERRORS_SCHEMA } from '@angular/core/src/metadata/ng_module';
import { ModalService } from './modal.service';
import {CreateDynamicComponentService} from "../utils/create-dynamic-component.service";
import {IModalConfig, ModalType, ModalSize} from "../../../src/angular/modals/models/modal-config";
import { NgModel } from '@angular/forms/src/directives/ng_model';
import { ModalInnerContent } from "../../../stories/ng2-component-lab/components/modal-inner-content-example.component";



const MODAL_CONTENT = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed risus nisl, egestas vitae erat non,' +
'pulvinar lacinia libero. Integer pulvinar pellentesque accumsan. Sed hendrerit lacus eu tempus pharetra';


describe("Modal unit-tests", () => {
    let fixture: ComponentFixture<ModalTestComponent>;
    let component: ModalTestComponent;
    let testService: ModalService;
    
    const testInputModal = {
        size: 'xl', //'xl|l|md|sm|xsm'
        title: 'Test_Title',
        message: 'Test_Message'
    };
    
    const MODAL_CONTENT = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed risus nisl, egestas vitae erat non,' +
    'pulvinar lacinia libero. Integer pulvinar pellentesque accumsan. Sed hendrerit lacus eu tempus pharetra';
    
    const onConfirmAction = ():void => {
        alert("Action has been confirmed");
    };

    let modalExtension;
    let modalConfig:IModalConfig = <IModalConfig> {
            size: ModalSize.medium,
            title: 'Title',
            type: ModalType.custom,
            buttons: [{text:"Save & Close", callback:this.customModalOnDone, closeModal:true}, 
                      {text:"Save", callback:this.customModalOnSave, closeModal:false}, 
                      {text:"Cancel", type: 'secondary', closeModal:true}]
        };
        
    beforeEach(async(() => {
        TestBed.configureTestingModule({
           providers:[
                ModalService,
                CreateDynamicComponentService,
                //  Inject, ApplicationRef, ComponentFactoryResolver
            ],
            declarations: [],
            imports:[ModalTestModule, CommonModule],
            schemas:[NO_ERRORS_SCHEMA]
        }).compileComponents();
        testService = TestBed.get(ModalService);
        fixture = TestBed.createComponent(ModalTestComponent);
        component = fixture.componentInstance;
    }));

    fit('Modal should be open', () => {
        // const modalService = component.modalService.openModal(testInputModal)
        console.log(component);
        let componentInstance = component.modalService.openModal(testInputModal);
        expect(componentInstance).toBeTruthy();
    })
})



@Component({
    selector: 'modal-test',
    template: `<div></div>`
})

export class ModalTestComponent {
 
    @Input() action:string; 

    constructor(public modalService: ModalService){}

    public openModal = ():void => {
        if (this[this.action]) { 
            this[this.action](); 
        }
    }

    private openErrorModal = ():void => {
        this.modalService.openErrorModal(MODAL_CONTENT);       
    };

    private openAlertModal = ():void => { 
        this.modalService.openAlertModal("Alert Title", MODAL_CONTENT);
    };

    private openActionModal = ():void => {
        this.modalService.openActionModal('Standard Modal', MODAL_CONTENT, "Yes", this.onConfirmAction);
    };

    private onConfirmAction = ():void => {
        alert("Action has been confirmed");
    };

    private openCustomModal = ():void => {

        let modalConfig:IModalConfig = <IModalConfig> {
            size: ModalSize.medium,
            title: 'Title',
            type: ModalType.custom,
            buttons: [{text:"Save & Close", callback:this.customModalOnDone, closeModal:true}, 
                      {text:"Save", callback:this.customModalOnSave, closeModal:false}, 
                      {text:"Cancel", type: 'secondary', closeModal:true}]
        };
        this.modalService.openCustomModal(modalConfig, ModalInnerContent, {name: "Sample Content"});
    }

    private customModalOnDone = ():void => {
        let currentInstance:any = this.modalService.getCurrentInstance();
        alert("Done with result: " + currentInstance.innerModalContent.instance.name);
    };

    private customModalOnSave = ():void => {
        let currentInstance:any = this.modalService.getCurrentInstance();
        alert("Save with result: " + currentInstance.innerModalContent.instance.name);
        
    };
}


@NgModule({
    declarations:[ModalTestComponent, ModalInnerContent],
    entryComponents:[ModalTestComponent, ModalInnerContent],
    imports:[CommonModule], 
    schemas:[NO_ERRORS_SCHEMA]
})

export class ModalTestModule  { }
