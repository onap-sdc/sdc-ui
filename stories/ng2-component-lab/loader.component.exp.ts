import { experimentOn } from '@islavi/ng2-component-lab';
import { LoaderService } from '../../src/angular/loader/loader.service';

export default experimentOn('Loader')
    .group("Loader", [
      {
        id: 'Small Fixed Loader',
        showSource: true,
        title: 'Regular loader',
        description: 'Simple Fixed loader',
        context: {
          showLoaderFlag : 0
        },
        template: `
                <h3>We show loader : <h2 *ngIf = "!showLoaderFlag" style="color:red">NO</h2> <h2 *ngIf = "showLoaderFlag" style="color:green">Yes</h2></h3>
                <sdc-loader size="large" #loader1 name="test2" [(active)] = "showLoaderFlag">
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
        template: `
          <general-loader-example></general-loader-example>
        `
      },
      {
        id: 'Multiple Loader Example',
        showSource: true,
        title: 'Multiple Loader Example Example',
        description: '',
        context: {},
        template: `
                <div style="display:inline-flex">
                  <sdc-loader size="large" name="multiple">
                    <multiple-loader-example></multiple-loader-example>
                    <multiple-loader-second-example></multiple-loader-second-example>
                  </sdc-loader>
                </div>
        `
      },
      {
        id: 'Simple Loader',
        showSource: true,
        title: 'Regular Simple Loader',
        description: 'Simple loader',
        context: {
            global: true,
            showLoaderFunc: (loader) => {
              loader.loaderService.activate(loader.name);
              setTimeout(() => {
                loader.loaderService.deactivate(loader.name);
              }, 2000);
          }
        },
        template: `
                  <sdc-loader [global] = "global" name= "global" #globalLoader></sdc-loader>
                  <sdc-button
                      text="Global Loader Activate"
                      (click)="showLoaderFunc(globalLoader)">
                  </sdc-button>,
                `,
      },
      {
        id: 'Simple Output Loader',
        showSource: true,
        title: 'Regular Simple Loader',
        description: 'Simple loader',
        context: {
            global: true,
            showLoaderFunc: (loader) => {
              loader.loaderService.activate(loader.name);
              setTimeout(() => {
                loader.loaderService.deactivate(loader.name);
              }, 2000);
          }
        },
        template: `
                 <loader-output-example></loader-output-example>
                `,
      },
    ]);
