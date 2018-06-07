import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, Input, NgModule, ViewContainerRef, Inject, Injectable, Type, ApplicationRef, ComponentFactoryResolver, ComponentRef, EmbeddedViewRef, Injector } from '@angular/core';
import { NO_ERRORS_SCHEMA } from '@angular/core/src/metadata/ng_module';
import { ModalService } from './modal.service';
import { CreateDynamicComponentService } from "../utils/create-dynamic-component.service";
import { IModalConfig, ModalType, ModalSize } from "../../../src/angular/modals/models/modal-config";
import { ModalInnerContent } from "../../../stories/ng2-component-lab/components/modal-inner-content-example.component";


describe("Modal unit-tests", () => {
    let testService: ModalService;
    const testInputModal = {
        size: 'xl', //'xl|l|md|sm|xsm'
        title: 'Test_Title',
        message: 'Test_Message',
        modalVisible: true
    };

    beforeEach(async(() => {
        TestBed.configureTestingModule({
           providers:[
                ModalService,
                { provide : CreateDynamicComponentService, useClass: CreateDynamicComponentServiceTest}
            ],
            declarations: [],
            schemas:[NO_ERRORS_SCHEMA]
        })
        testService = TestBed.get(ModalService);
    }));

    it('Modal should be open test', () => {
        let modalInstance = testService.openModal(testInputModal);
        expect(modalInstance).toBeTruthy();
    })

    it('Modal alert window test', () => {
        let modalInstance = testService.openAlertModal('testAlert', 'testMessage');
        expect(modalInstance).toBeTruthy();
    })

    it('Modal info window test', () => {
        let modalInstance = testService.openErrorModal('testMessage', 'sampleTestId');
        expect(modalInstance).toBeTruthy();
    })


    it('Custom Modal should be open', () => {
        let modalConfig:IModalConfig = <IModalConfig> {
            size: ModalSize.medium,
            title: 'Title',
            type: ModalType.custom,
            buttons: [{text:"Save & Close", closeModal:true},
                      {text:"Save", callback:this.customModalOnSave, closeModal:false},
                      {text:"Cancel", type: 'secondary', closeModal:true}]
        };
        let modalInstance = testService.openCustomModal(modalConfig, ModalInnerContent, {name: "Sample Content"});
        expect(modalInstance).toBeTruthy();
    })

    it('Shoul close window', () => {
        let modalInstance = testService.openModal(testInputModal);
        testService.closeModal();
        expect(modalInstance.instance.modalVisible).toBeFalsy();
    })
})


const testModalInstance = {
    instance:{
        closeAnimationComplete:{
            subscribe:() => {
                return true;
            },
        },
        _createDynamicComponentService:{
            insertComponentDynamically:() => {
                return true;
            }
        },
        modalVisible:true
    },

};

@Component({
    selector: 'modal-test',
    template: `<div></div>`
})



export class CreateDynamicComponentServiceTest {
    modalVisble: true;
    public createComponentDynamically = (modalInstance, customData) => {
        return testModalInstance;
    }
    public insertComponentDynamically = () =>{
        return testModalInstance;
    }

}




