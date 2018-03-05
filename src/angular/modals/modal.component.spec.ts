import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalComponent } from './modal.component';
import { ModalButtonComponent } from './modal-button.component';
describe('Modal component', () => {
    // 
    let component: ModalComponent;
    let fixture: ComponentFixture<ModalComponent>;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ ModalComponent, ModalButtonComponent ],
        }).compileComponents();
        
        fixture = TestBed.createComponent(ModalComponent);
        component = fixture.componentInstance;
    }));

    it('component should be created', () => {
        expect(component).toBeTruthy();
    });

    it('Modal should close', async( ()=> {
        // component.modalToggled();
        let component = fixture.componentInstance; 
        spyOn(component.closeAnimationComplete, 'emit');

        // trigger the click
        let nativeElement = fixture.nativeElement;
        let button = nativeElement.querySelector('.sdc-modal__close-button');
        button.dispatchEvent(new Event('click'));

        fixture.detectChanges();

        // expect(component.closeAnimationComplete.emit).toHaveBeenCalledWith('hello');
        expect(component.modalVisible).toEqual(false);
    }))
})