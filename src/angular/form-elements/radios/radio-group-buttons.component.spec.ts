import { TestBed, async } from '@angular/core/testing';
import { RadioGroupComponent } from "./radio-group-buttons.component";
import { FormsModule } from "@angular/forms";
import { RadioButtonComponent } from "./radio-button.component"
import { IOptionItem } from "./radio-button.model"


describe("Test", ()=>{
    let component: RadioGroupComponent;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                RadioGroupComponent,
                RadioButtonComponent
            ],
            imports:[
                FormsModule
            ]
        }).compileComponents();

        const fixture = TestBed.createComponent(RadioGroupComponent);
        component = fixture.componentInstance;
        component.disabled = false;//TODO constructor
        component.options = {
            items: []
        };
    }));

    it('Component Created', async(()=> {
        expect(component).toBeDefined();
    }));

    it('Not possible to choose value which not exists', async(() =>{
        component.onSelectionChange('test');
        expect(component.selectedValue).not.toEqual('test');
    }));

    it('Not possible to choose when component disabled', async(() =>{
        component.disabled = true;
        component.options.items = [ <IOptionItem> {
            value: 'val1',
            checked: false,
            name: 'exp6',
            label: 'Label of Radio1'
        }, <IOptionItem> {
            value: 'val2',
            checked: false,
            name: 'exp6',
            label: 'Label of Radio2'
        }];
        component.onSelectionChange(component.options.items[0].value);
        expect(component.selectedValue).not.toEqual(component.options.items[0].value);
    }));

    it('Normal flow', async(() =>{
        component.options.items = [ <IOptionItem> {
            value: 'val1',
            checked: false,
            name: 'exp6',
            label: 'Label of Radio1'
        }, <IOptionItem> {
            value: 'val2',
            checked: false,
            name: 'exp6',
            label: 'Label of Radio2'
        }];
        component.onSelectionChange(component.options.items[0].value);
        expect(component.selectedValue).toEqual(component.options.items[0].value);
    }));
});
