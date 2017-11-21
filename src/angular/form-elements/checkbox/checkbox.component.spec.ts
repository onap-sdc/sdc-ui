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
        component = fixture.componentInstance;
    }));

    it("Component Created", async(()=> {
        expect(component).toBeDefined();
    }));

    it( "Test Value suppose to be toggled", async( ()=> {
            const test_value = false;
            component.value = { state: true };
            component.toggleState(!test_value);
            expect(component.value.state).toEqual(!test_value);
    }));
});
