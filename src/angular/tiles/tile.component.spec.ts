import { TestBed, async } from '@angular/core/testing';
import { TileComponent } from "./tile.component";

describe("Test", ()=>{
    let component: TileComponent;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                TileComponent
            ],
        }).compileComponents();
        const fixture = TestBed.createComponent(TileComponent);
        component = fixture.componentInstance;
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
})
