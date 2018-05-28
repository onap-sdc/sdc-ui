import { experimentOn } from '@islavi/ng2-component-lab';
import { IDropDownOption, DropDownOptionType, DropDownTypes } from "../../src/angular/form-elements/dropdown/dropdown-models";

export default experimentOn('Loader')
    .group("Loader", [
      {
        id: 'Small Fixed Loader',
        showSource: true,
        title: 'Regular loader',
        description: 'Simple Fixed loader',
        context: {
            showLoaderFlag: false,
            showLoaderFunc: function() {
                this.showLoaderFlag = !this.showLoaderFlag;
                const that = this;
                setTimeout(() => { that.showLoaderFlag = false; }, 2000);
            },
            onChange: function() {
              this.showLoaderFlag = !this.showLoaderFlag;
              const that = this;
              setTimeout(() => { that.showLoaderFlag = false; }, 2000);
            },
            options: [
                {
                  label: 'Third Option Label',
                  value: 'thirdOptionValue',
                  type: DropDownOptionType.Simple
                },
                {
                    label: 'Fourth Option Label',
                    value: 'FourthOptionValue',
                    type: DropDownOptionType.Simple
                }
          ]
        },
        template: `
                <sdc-loader size="large" #loader1 name="test2">
                  <div style="border:1px solid black; padding:20px 100px;">
                    <sdc-input label="Please Enter Value" required="true" [maxLength]="5"></sdc-input>
                    <sdc-input label="Please Enter Value" required="true" [maxLength]="5"></sdc-input>
                    <sdc-input label="Please Enter Value" required="true" [maxLength]="5"></sdc-input>
                    <sdc-input label="Please Enter Value" required="true" [maxLength]="5"></sdc-input>
                  </div>
                </sdc-loader >
                <div style="margin:10px 0px;">
                  <sdc-button
                    text="Show loader"
                    (click)="loader1.activate()">
                  </sdc-button>
                  <sdc-button
                    text="Hide loader"
                    (click)="loader1.deactivate()">
                  </sdc-button>
                </div>
                `,
      },
      {
        id: 'General loader with service',
        showSource: true,
        title: 'General loader with service',
        description: '',
        context: {},
        template: `<general-loader-example></general-loader-example>`
      },
      {
        id: 'Simple Loader',
        showSource: true,
        title: 'Regular Simple Loader',
        description: 'Simple loader',
        context: {
            showLoaderFlag: false,
            global: true,
            showLoaderFunc: function() {
              this.showLoaderFlag = !this.showLoaderFlag;
              const that = this;
              setTimeout(() => { that.showLoaderFlag = false; }, 2000);
          },

        },
        template: `
                  <sdc-loader [global] = "global" name= "global" #globalLoader></sdc-loader>
                  <sdc-button
                      text="Global Loader Activate"
                      (click)="globalLoader.activate()">
                  </sdc-button>,
                  <sdc-button
                      text="Global Loader Activate"
                      (click)="globalLoader.deactivate()">
                  </sdc-button>`,
      },
      // {
      //   id: 'Fixed Different Size Loader',
      //   showSource: true,
      //   title: 'Fixed Different Size Loader',
      //   description: 'Fixed Different Size Loader',
      //   context: {
      //       showLoaderFlag: false,
      //       global: false,
      //       showLoaderFunc: function() {
      //         this.showLoaderFlag = !this.showLoaderFlag;
      //         const that = this;
      //         setTimeout(() => { that.showLoaderFlag = false; }, 2000);
      //     }
      //   },
      //   template: `
      //           <sdc-loader  [size]="'small'" [global]="global">
      //             <div style="border:1px solid black; padding:20px 100px;">
      //               <sdc-input label="Please Enter Value" required="true" [maxLength]="5"></sdc-input>
      //               <sdc-input label="Please Enter Value" required="true" [maxLength]="5"></sdc-input>
      //               <sdc-input label="Please Enter Value" required="true" [maxLength]="5"></sdc-input>
      //             </div>
      //           </sdc-loader>
      //           <div style="margin:10px 0px;">
      //             <sdc-button
      //               text="Discrete loader"
      //               (click)="showLoaderFunc()">
      //             </sdc-button>
      //           </div>
      //           `,
      // }
      //  {
      //   id: 'Fixed Different Size Loader',
      //   showSource: true,
      //   title: 'Fixed Different Size Loader',
      //   description: 'Fixed Different Size Loader',
      //   context: {
      //       showLoaderFlag: false,
      //       showLoaderFunc: function() {
      //         this.showLoaderFlag = !this.showLoaderFlag;
      //         const that = this;
      //         setTimeout(() => { that.showLoaderFlag = false; }, 2000);
      //     }
      //   },
      //   template: `
      //           <sdc-loader [display]="showLoaderFlag" [size]="'medium'">
      //             <div style="border:1px solid black; padding:20px 100px;">
      //               <sdc-input label="Please Enter Value" required="true" [maxLength]="5"></sdc-input>
      //               <sdc-input label="Please Enter Value" required="true" [maxLength]="5"></sdc-input>
      //               <sdc-input label="Please Enter Value" required="true" [maxLength]="5"></sdc-input>
      //             </div>
      //           </sdc-loader>
      //           <div style="margin:10px 0px;">
      //             <sdc-button
      //               text="Discrete loader"
      //               (click)="showLoaderFunc()">
      //             </sdc-button>
      //           </div>
      //           `,
      // },
      // {
      //   id: 'Loader Div Inside Div',
      //   showSource: true,
      //   title: 'Fixed Different Size Loader',
      //   description: 'Fixed Different Size Loader',
      //   context: {
      //       showLoaderFlag: false,
      //       global: false,
      //       showLoaderFunc: function() {
      //         this.showLoaderFlag = !this.showLoaderFlag;
      //         const that = this;
      //         setTimeout(() => { that.showLoaderFlag = false; }, 2000);
      //     },
      //     showLoaderFlag2: false,
      //     showLoaderFunc2: function() {
      //       this.showLoaderFlag2 = !this.showLoaderFlag2;
      //       const that = this;
      //       setTimeout(() => { that.showLoaderFlag2 = false; }, 2000);
      //     }
      //   },
      //   template: `
      //   <sdc-loader [display]="showLoaderFlag" [size]="'large'" [global]="global">
      //       <div style="border:1px solid black; padding:20px 100px;">
      //         <sdc-input label="Please Enter Value" required="true" [maxLength]="5"></sdc-input>
      //         <sdc-input label="Please Enter Value" required="true" [maxLength]="5"></sdc-input>
      //         <sdc-loader [display]="showLoaderFlag2" [size]="'large'" [global]="global">
      //           <div style="border:1px solid black; padding:20px 100px;">
      //             <sdc-input label="Please Enter Value" required="true" [maxLength]="5"></sdc-input>
      //             <sdc-input label="Please Enter Value" required="true" [maxLength]="5"></sdc-input>
      //           </div>
      //         </sdc-loader>
      //         <div style="margin:10px 0px;">
      //           <sdc-button
      //             text="Discrete loader"
      //             (click)="showLoaderFunc2()">
      //           </sdc-button>
      //         </div>
      //       </div>
      //   </sdc-loader>
      //   <div style="margin:10px 0px;">
      //     <sdc-button
      //       text="Discrete loader"
      //       (click)="showLoaderFunc()">
      //     </sdc-button>
      //   </div>
      //           `,
      // }
    ]);
