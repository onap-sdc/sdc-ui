import { TestBed, async } from '@angular/core/testing';
import { RadioGroupComponent } from "./radio-buttons-group.component";
import { FormsModule } from "@angular/forms";
import { IRadioButtonModel } from "./radio-button.model";

describe("Test", () => {
    let component: RadioGroupComponent;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                RadioGroupComponent
            ],
            imports: [
                FormsModule
            ]
        }).compileComponents();

        const fixture = TestBed.createComponent(RadioGroupComponent);
        component = fixture.componentInstance;
        component.disabled = false; // TODO constructor
        component.options = {
            items: []
        };
    }));

    it('Component Created', async(() => {
        expect(component).toBeDefined();
    }));

    it('Not possible to choose value which not exists', async(() => {
        component.value = 'test';
        expect(component.value).not.toEqual('test');
    }));

    it('Not possible to choose when component disabled', async(() => {
        component.disabled = true;
        component.options.items = [{
            value: 'val1',
            name: 'exp6',
            label: 'Label of Radio1'
        } as IRadioButtonModel, {
            value: 'val2',
            name: 'exp6',
            label: 'Label of Radio2'
        } as IRadioButtonModel];
        component.value = component.options.items[0].value;
        expect(component.value).not.toEqual(component.options.items[0].value);
    }));

    it('Normal flow', async(() => {
        component.options.items = [{
            value: 'val1',
            name: 'exp6',
            label: 'Label of Radio1'
        } as IRadioButtonModel, {
            value: 'val2',
            name: 'exp6',
            label: 'Label of Radio2'
        } as IRadioButtonModel];
        component.value = component.options.items[0].value;
        expect(component.value).toEqual(component.options.items[0].value);
    }));

});
