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
        de = fixture.debugElement.query(By.css('.sdc-tile'));
        element  = de.nativeElement;
    }));

    it("Create Component should be!", async(()=> {
        expect(component).toBeTruthy();
    }));
})
