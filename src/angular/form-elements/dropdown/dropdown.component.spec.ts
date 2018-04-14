import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DropDownComponent } from './dropdown.component';
import { IDropDownOption, DropDownTypes } from "./dropdown-models";
import { FormsModule } from "@angular/forms";
import {SvgIconModule} from "../../svg-icon/svg-icon.module";


const label:string = "DropDown example";
const placeHolder:string = "Please choose option";
const options:IDropDownOption[] = [
    {
        label:'First Option',
        value: 'First Option'
    },
    {
        label:'Second Option',
        value: 'Second Option'
    },
    {
        label:'Third Option',
        value: 'Third Option'
    }
];

describe('DropDown component', () => {
    let fixture: ComponentFixture<DropDownComponent>;
    let component: DropDownComponent;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ DropDownComponent ],
            imports:[
                FormsModule,
                SvgIconModule
            ]
        }).compileComponents();
        fixture = TestBed.createComponent(DropDownComponent);
        component = fixture.componentInstance;

    }));

    beforeEach(()=>{
        component.label = label;
        component.placeHolder = placeHolder;
        component.options = options;
        component.type = DropDownTypes.Regular;
        console.log('herer we got component', component)
        fixture.detectChanges();
    });

    it('component should be created', () => {
        expect(component).toBeTruthy();
    });

    it('component should export the selected value', () => {
        const index = 1;
        const option = options[index];

        component.selectOption(index, option);
        fixture.detectChanges();
        expect(component.selectedOption).toEqual(option);
    });

    it('component should have a required flag', () => {
        component.required  = true;
        fixture.detectChanges();
        component.validateDropDown();
        expect(component.isValid()).toEqual(false);

        const index = 2;
        const option = options[index];
        component.selectOption(index, option);
        fixture.detectChanges();
        component.validateDropDown();
        expect(component.isValid()).toEqual(true);
    });

    it('component should have autocomplite', () =>{
        expect(component.options.length).toEqual(3);
        component.type = DropDownTypes.Auto;
        component.filterValue = 'testERrorotesttresadfadfasdfasf';
        fixture.detectChanges();
        component.filterOptions(component.filterValue);
        expect(component.options.length).toEqual(0);
    });

});
