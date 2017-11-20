import { TestBed, async } from '@angular/core/testing';
import { CheckboxComponent } from "./checkbox.component";
import { DebugElement }    from '@angular/core';
import { By }              from '@angular/platform-browser';

describe("Test", ()=>{
    let component: CheckboxComponent;
    let de: DebugElement;
    let element: HTMLElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                CheckboxComponent
            ],
        }).compileComponents();
        const fixture = TestBed.createComponent(CheckboxComponent);
        component = fixture.componentInstance;
    }));

    it("Test Value suppose to be true", async(()=> {
        component.value = 'test';
        component.toggleState(true);

        expect(component.value.state);
    }));
})
