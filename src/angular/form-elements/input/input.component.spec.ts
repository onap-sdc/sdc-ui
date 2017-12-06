import { TestBed, async } from '@angular/core/testing';
import { FormsModule } from "@angular/forms";
import {CheckModel, ICheck, OptionTypes} from "./validation.model";
import {InputComponent} from "./input.component";



describe("Test", ()=> {
    let component: InputComponent;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                InputComponent
            ],
            imports: [
                FormsModule
            ]
        }).compileComponents();

        const fixture = TestBed.createComponent(InputComponent);
        component = fixture.componentInstance;

    }));

    it('Component Created', async(()=> {
        expect(component).toBeDefined();
    }));

    it('if patterns exists, Input became invalid with wrong value', async(()=> {
        component.options = [{type:OptionTypes.PATTERN, patterns : ['test'],message:'not matches with patterns'}];
        component.value = '344';
        let test_check = new CheckModel(false, 'not matches with patterns');
        component.onChange();
        expect(component.check).toEqual(test_check);
    }));

    it('if patterns exists, Input became valid with value which has match with pattern', async(()=> {
        component.options = [{type:OptionTypes.PATTERN, patterns : ['[A-Z]'],message:'not matches with patterns'}];
        component.value = 'A';
        let test_check = new CheckModel(true, '');
        component.onChange();
        expect(component.check).toEqual(test_check);
    }));

    it('if input exists, but have no options ', async(()=> {
        component.value = 'test';
        component.onChange();
        expect(component.check).toBeUndefined();
    }));


    it('Input with callback resolve true', async(()=> {
        let callback = function(){
            return true;
        };
        component.options = [{type:OptionTypes.CUSTOM, callback:callback, message:'Callback false'}];
        component.value = 'test';
        component.onChange();
        let test_check = new CheckModel(true, '');
        expect(component.check).toEqual(test_check);;
    }));

    it('Input with callback resolve false', async(()=> {
        let callback = function(){
            return false;
        };
        component.options = [{type:OptionTypes.CUSTOM, callback:callback, message:'Callback false'}];
        component.value = 'test';
        component.onChange();
        let test_check = new CheckModel(false, 'Callback false');
        expect(component.check).toEqual(test_check);;
    }));

})
