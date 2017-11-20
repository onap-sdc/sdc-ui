import { TestBed, async } from '@angular/core/testing';
import { CheckboxComponent } from "./checkbox.component";
import { FormsModule } from "@angular/forms";


describe("Test", ()=>{
    let component: CheckboxComponent;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                CheckboxComponent
            ],
            imports:[
                FormsModule
            ]
        }).compileComponents();
        const fixture = TestBed.createComponent(CheckboxComponent);

        const test_value2 = {
            name:'test2',
            state:false
        }
        component = fixture.componentInstance;
    }));
    it("Component Created", async(()=> {
        expect(component).toBeTruthy();
    }));

    it("Test Value suppose to be true", async(()=> {
        const test_value = {
            name:'test',
            state:true
        };
        component.value = {};
        component.value.name = 'test';
        component.toggleState(true);
        expect(component.value).toEqual(test_value);
    }));

    it( "Test Value suppose to be equal false", async( ()=> {
            const test_value = {
                name: 'test',
                state: false
            };
            component.value = {};
            component.value.name = 'test';
            component.toggleState(false);
            expect(component.value).toEqual(test_value);
    }));
});
