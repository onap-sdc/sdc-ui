import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal.component';
import { ModalButtonComponent } from './modal-button.component';
import { ModalService } from './modal.service';
import {CreateDynamicComponentService} from "../utils/create-dynamic-component.service";
import {IModalConfig, ModalType, ModalSize} from "../../../src/angular/modals/models/modal-config";
import { NgModel } from '@angular/forms/src/directives/ng_model';
import { NO_ERRORS_SCHEMA } from '@angular/core/src/metadata/ng_module';
import { ModalInnerContent } from "../../../stories/ng2-component-lab/components/modal-inner-content-example.component";

describe("Radio Buttons unit-tests", ()=>{
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
                CreateDynamicComponentService
            ],
            imports:[TestModuleModal, CommonModule], 
            schemas:[NO_ERRORS_SCHEMA]
        }).compileComponents();
        testService = TestBed.get(ModalService);
    }));

    it('Modal should be open', () => {
        modalExtension = testService.openModal(testInputModal);
        expect(modalExtension).toBeTruthy();
    })

    it('Modal shoud create Alert modal-window', () => {
        modalExtension = testService.openAlertModal('test','test2') 
        expect(modalExtension._nativeElement && modalExtension._component).toBeTruthy();
    })

    it ('Modal should create Action modal-window', () => {
        modalExtension = testService.openActionModal('Standard Modal', MODAL_CONTENT, "Yes", this.onConfirmAction)
        expect(modalExtension._nativeElement && modalExtension._component).toBeTruthy();
    })
    
    it ('Modal should create Error modal-window', () => {
        modalExtension = testService.openErrorModal('Test error message');
        expect(modalExtension._nativeElement && modalExtension._component).toBeTruthy();
    })

    it ('Modal should create Custom modal-window', () => {
        modalExtension = testService.openCustomModal(modalConfig, ModalInnerContent, {name: "Sample Content"}); 
        expect(modalExtension._nativeElement && modalExtension._component).toBeTruthy();
    })
})



@Component({
    selector: 'modal-consumer',
    template: `<div></div>`,
    providers: [ModalService]
})



@NgModule({
    declarations:[ModalComponent, ModalInnerContent],
    entryComponents:[ModalComponent, ModalInnerContent],
    imports:[CommonModule], 
    schemas:[NO_ERRORS_SCHEMA]
})

class TestModuleModal{};