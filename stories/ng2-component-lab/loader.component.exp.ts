import { experimentOn } from '@islavi/ng2-component-lab';

export default experimentOn('Loader')
    .group("Loader", [
      {
        id: 'Small Fixed Loader',
        showSource: true,
        title: 'Regular loader',
        description: 'Simple Fixed loader',
        context: {
            showLoaderFlag: false,
            global: false,
            showLoaderFunc: function() {
                this.showLoaderFlag = !this.showLoaderFlag;
                const that = this;
                setTimeout(() => { that.showLoaderFlag = false; }, 2000);
            },

        },
        template: `
                <sdc-loader [display]="showLoaderFlag" [size]="'large'" [global]="global">
                  <div style="border:1px solid black; padding:20px 100px;">
                    <sdc-input label="Please Enter Value" required="true" [maxLength]="5"></sdc-input>
                    <sdc-input label="Please Enter Value" required="true" [maxLength]="5"></sdc-input>
                    <sdc-input label="Please Enter Value" required="true" [maxLength]="5"></sdc-input>
                    <sdc-input label="Please Enter Value" required="true" [maxLength]="5"></sdc-input>
                    <sdc-input label="Please Enter Value" required="true" [maxLength]="5"></sdc-input>
                  </div>
                </sdc-loader>
                <div style="margin:10px 0px;">
                  <sdc-button
                    text="Discrete loader"
                    (click)="showLoaderFunc()">
                  </sdc-button>
                </div>
                `,
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
                  <sdc-loader [display] = "showLoaderFlag" [global] = "global"></sdc-loader>
                  <sdc-button
                      text="Global Loader"
                      (click)="showLoaderFunc()">
                  </sdc-button>`,
      },
      {
        id: 'Fixed Different Size Loader',
        showSource: true,
        title: 'Fixed Different Size Loader',
        description: 'Fixed Different Size Loader',
        context: {
            showLoaderFlag: false,
            global: false,
            showLoaderFunc: function() {
              this.showLoaderFlag = !this.showLoaderFlag;
              const that = this;
              setTimeout(() => { that.showLoaderFlag = false; }, 2000);
          }
        },
        template: `
                <sdc-loader [display]="showLoaderFlag" [size]="'small'" [global]="global">
                  <div style="border:1px solid black; padding:20px 100px;">
                    <sdc-input label="Please Enter Value" required="true" [maxLength]="5"></sdc-input>
                    <sdc-input label="Please Enter Value" required="true" [maxLength]="5"></sdc-input>
                    <sdc-input label="Please Enter Value" required="true" [maxLength]="5"></sdc-input>
                  </div>
                </sdc-loader>
                <div style="margin:10px 0px;">
                  <sdc-button
                    text="Discrete loader"
                    (click)="showLoaderFunc()">
                  </sdc-button>
                </div>
                `,
      },
       {
        id: 'Fixed Different Size Loader',
        showSource: true,
        title: 'Fixed Different Size Loader',
        description: 'Fixed Different Size Loader',
        context: {
            showLoaderFlag: false,
            showLoaderFunc: function() {
              this.showLoaderFlag = !this.showLoaderFlag;
              const that = this;
              setTimeout(() => { that.showLoaderFlag = false; }, 2000);
          }
        },
        template: `
                <sdc-loader [display]="showLoaderFlag" [size]="'medium'">
                  <div style="border:1px solid black; padding:20px 100px;">
                    <sdc-input label="Please Enter Value" required="true" [maxLength]="5"></sdc-input>
                    <sdc-input label="Please Enter Value" required="true" [maxLength]="5"></sdc-input>
                    <sdc-input label="Please Enter Value" required="true" [maxLength]="5"></sdc-input>
                  </div>
                </sdc-loader>
                <div style="margin:10px 0px;">
                  <sdc-button
                    text="Discrete loader"
                    (click)="showLoaderFunc()">
                  </sdc-button>
                </div>
                `,
      },
      {
        id: 'Loader Div Inside Div',
        showSource: true,
        title: 'Fixed Different Size Loader',
        description: 'Fixed Different Size Loader',
        context: {
            showLoaderFlag: false,
            global: false,
            showLoaderFunc: function() {
              this.showLoaderFlag = !this.showLoaderFlag;
              const that = this;
              setTimeout(() => { that.showLoaderFlag = false; }, 2000);
          },
          showLoaderFlag2: false,
          showLoaderFunc2: function() {
            this.showLoaderFlag2 = !this.showLoaderFlag2;
            const that = this;
            setTimeout(() => { that.showLoaderFlag2 = false; }, 2000);
          }
        },
        template: `
        <sdc-loader [display]="showLoaderFlag" [size]="'large'" [global]="global">
            <div style="border:1px solid black; padding:20px 100px;">
              <sdc-input label="Please Enter Value" required="true" [maxLength]="5"></sdc-input>
              <sdc-input label="Please Enter Value" required="true" [maxLength]="5"></sdc-input>
              <sdc-loader [display]="showLoaderFlag2" [size]="'large'" [global]="global">
                <div style="border:1px solid black; padding:20px 100px;">
                  <sdc-input label="Please Enter Value" required="true" [maxLength]="5"></sdc-input>
                  <sdc-input label="Please Enter Value" required="true" [maxLength]="5"></sdc-input>
                </div>
              </sdc-loader>
              <div style="margin:10px 0px;">
                <sdc-button
                  text="Discrete loader"
                  (click)="showLoaderFunc2()">
                </sdc-button>
              </div>
            </div>
        </sdc-loader>
        <div style="margin:10px 0px;">
          <sdc-button
            text="Discrete loader"
            (click)="showLoaderFunc()">
          </sdc-button>
        </div>
                `,
      }
    ]);
