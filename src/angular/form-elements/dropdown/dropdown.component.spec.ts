import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DropDownComponent } from './dropdown.component';
import { IDropDownOption } from "./dropdown-models";

const label: string = "DropDown example";
const placeHolder: string = "Please choose option";

const options: IDropDownOption[] = [
    {
        label: 'First Option',
        value: 'First Option'
    },
    {
        label: 'Second Option',
        value: 'Second Option'
    },
    {
        label: 'Third Option',
        value: 'Third Option'
    }
];

describe('DropDown component', () => {
    let fixture: ComponentFixture<DropDownComponent>;
    let component: DropDownComponent;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ DropDownComponent ],
        }).compileComponents();
        fixture = TestBed.createComponent(DropDownComponent);
        component = fixture.componentInstance;

    }));

    beforeEach(() => {
        component.label = label;
        component.placeHolder = placeHolder;
        component.options = options;
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

});
