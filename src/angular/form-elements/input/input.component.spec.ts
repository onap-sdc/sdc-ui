import { TestBed, async } from '@angular/core/testing';
import { InputComponent } from "./input.component";
import { FormsModule } from "@angular/forms";



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

    it('Component Created', async(()=> {
        expect(component).toBeDefined();
    }));
})
