import { TestBed, async } from '@angular/core/testing';
import { RadioGroupComponent } from "./radio-buttons-group.component";
import { FormsModule } from "@angular/forms";
import { IRadioButtonModel } from "./radio-button.model";
import { AnimationDirectivesModule } from "../../animations/animation-directives.module";


describe("Radio Buttons unit-tests", ()=>{
    let component: RadioGroupComponent;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                RadioGroupComponent
            ],
            imports:[
                FormsModule,
                AnimationDirectivesModule
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
        component.value = 'test';
        expect(component.value).not.toEqual('test');
    }));

    it('Normal flow', async(() =>{
        component.options.items = [ <IRadioButtonModel> {
            value: 'val1',
            name: 'exp6',
            label: 'Label of Radio1'
        }, <IRadioButtonModel> {
            value: 'val2',
            name: 'exp6',
            label: 'Label of Radio2'
        }];
        component.value = component.options.items[0].value;
        expect(component.value).toEqual(component.options.items[0].value);
    }));

});
