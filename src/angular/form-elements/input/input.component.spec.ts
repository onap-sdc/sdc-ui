// import { TestBed, async } from '@angular/core/testing';
// import { InputComponent } from "./input.component";
// import { FormsModule } from "@angular/forms";
//
//
//
// describe("Test", ()=> {
//     let component: InputComponent;
//     beforeEach(async(() => {
//         TestBed.configureTestingModule({
//             declarations: [
//                 InputComponent
//             ],
//             imports: [
//                 FormsModule
//             ]
//         }).compileComponents();
//
//         const fixture = TestBed.createComponent(InputComponent);
//         component = fixture.componentInstance;
//
//     }));
//
//     it('Component Created', async(()=> {
//         expect(component).toBeDefined();
//     }));
//
//     it('if patterns exists', async(()=> {
//         component.patterns = [{regex:'test', error_message:'test'}];
//         component.value = '344'
//         const test_check = { result: false, error: 'test' };
//         component.onValueChange();
//         expect(component.check).toEqual(test_check);
//     }));
//
//     it( 'Input validation', async(()=>{
//         // component.required = true;
//         component.value = '';
//         component.validateInput('test');
//         const test_check = { result: false, error: 'test' };
//         expect(component.check).toEqual(test_check);
//     }))
// })
