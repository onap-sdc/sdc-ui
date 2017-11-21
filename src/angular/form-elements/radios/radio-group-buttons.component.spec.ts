import { TestBed, async } from '@angular/core/testing';
import { RadioGroupComponent } from "./radio-group-buttons.component";
import { FormsModule } from "@angular/forms";
import { RadioButtonComponent } from "./radio-button.component"


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

    }));


});
