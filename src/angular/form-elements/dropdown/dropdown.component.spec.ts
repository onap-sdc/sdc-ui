import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DropDownComponent } from './dropdown.component';
import {DropDownGroupComponent} from './dropdown-group.component';

const label:string = "DropDown example";
const placeHolder:string = "Please choose option";
const options:string[] = ['First Option', 'Second Option', 'Third Option'];

describe('DropDown component', () => {
    // let fixture: ComponentFixture<DropDownComponent>;
    // let component: DropDownComponent;
    //
    // beforeEach(async(() => {
    //     TestBed.configureTestingModule({
    //         declarations: [ DropDownComponent, DropDownGroupComponent ],
    //     }).compileComponents();
    // }));
    //
    // beforeEach(()=>{
    //     fixture = TestBed.createComponent(DropDownComponent);
    //     component = fixture.componentInstance;
    //
    //     component.label = label;
    //     component.placeHolder = placeHolder;
    //     component.options = options;
    //
    //     fixture.detectChanges();
    // });
    //
    // it('component should be created', () => {
    //     expect(component).toBeTruthy();
    // });
    //
    // it('component should export the selected value', () => {
    //     const index = 1;
    //     const option = options[index];
    //
    //     component.selectOption(index, option);
    //     fixture.detectChanges();
    //     expect(component.value).toEqual(option);
    // });
    //
    // it('component should have a required flag', () => {
    //     component.required  = true;
    //     fixture.detectChanges();
    //     component.validateDropDown();
    //     expect(component.isValid()).toEqual(false);
    //
    //     const index = 2;
    //     const option = options[index];
    //
    //     component.selectOption(index, option);
    //     fixture.detectChanges();
    //     component.validateDropDown();
    //     expect(component.isValid()).toEqual(true);
    // });
    //
    // it('component should trigger change event on value change', () => {
    //     const option = options[2];
    //     //component.selectOption(0, option);
    //     component.value = option;
    //     fixture.detectChanges();
    //
    //     let currentValue;
    //
    //     component.baseEmitter.subscribe((data)=>{
    //         currentValue = data;
    //         expect(currentValue).toEqual(option);
    //     });
    // });
});
