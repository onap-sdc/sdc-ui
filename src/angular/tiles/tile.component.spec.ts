import { TestBed, async } from '@angular/core/testing';
import { TileComponent } from "./tile.component";
import { DebugElement }    from '@angular/core';
import { By }              from '@angular/platform-browser';

describe("Test", ()=>{
    let component: TileComponent;
    let de: DebugElement;
    let element: HTMLElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                TileComponent
            ],
        }).compileComponents();
        const fixture = TestBed.createComponent(TileComponent);
        component = fixture.componentInstance;
        de = fixture.debugElement.query(By.css('.sdc-tile'));
        element  = de.nativeElement;
    }));

    it("Create Component should be!", async(()=> {
        expect(component).toBeTruthy();
    }));

    it('should render Tile with full list of parameters', async(() => {
        component.color = "purple";
        component.header = "R";
        component.constructor();
        expect(component.header).toEqual('R');
    }));
    it('should be fixed size', async(() => {
        component.color = "purple";
        component.header = "R";
        component.constructor();
        expect(element.textContent).toContain('sdc-tile-info');
    }))
})
