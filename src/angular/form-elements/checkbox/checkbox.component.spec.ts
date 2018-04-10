import { TestBed, async } from '@angular/core/testing';
import { CheckboxComponent } from "./checkbox.component";
import { AnimationDirectivesModule } from "../../animations/animation-directives.module";
import { FormsModule } from "@angular/forms";


describe("Checbox Tests", ()=>{
    let component: CheckboxComponent;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                CheckboxComponent
            ],
            imports:[
                FormsModule,
                AnimationDirectivesModule
            ]
        }).compileComponents();
        const fixture = TestBed.createComponent(CheckboxComponent);
        component = fixture.componentInstance;
    }));

    it("Component Created", async(()=> {
        expect(component).toBeDefined();
    }));

    it( "Test Value suppose to be toggled", async( ()=> {
        component.toggleState(true)
        expect(component.checked).toEqual(true);
    }));

    it( "If disabled not toggled"), async(()=>{
        component.disabled = true;
        component.toggleState(true);
        expect(component.checked).toEqual(false);
    });
});
