import { Component, Input } from "@angular/core";
import { LoaderService } from "../../../src/angular/loader/loader.service";

@Component({
    selector: "general-loader-example",
    template: `       <sdc-loader size="large" #loader2 name="generalLoader">
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
      (click)="runLoader()">
    </sdc-button>
    <sdc-button
      text="Hide loader"
      (click)="stopLoader()">
    </sdc-button>
  </div>`
})
export class GeneralLoaderExampleComponent {

    constructor(private loaderService: LoaderService) {

    }

    public runLoader() {
        this.loaderService.registeredLoaders['generalLoader'].activate();
    }

    public stopLoader() {
        this.loaderService.registeredLoaders['generalLoader'].deactivate();
    }
}
