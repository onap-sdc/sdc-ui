import { Component, Input } from "@angular/core";
import { LoaderService } from "../../../src/angular/loader/loader.service";
import { setTimeout } from "timers";

@Component({
    selector: "general-loader-example",
    template: `
    <div style="margin:20px 0px">
      <sdc-loader size="large" #loader2 name="generalLoader">
        <div style="border:1px solid black; padding:20px 100px;">
          <sdc-input label="Please Enter Value" required="true" [maxLength]="5"></sdc-input>
          <sdc-input label="Please Enter Value" required="true" [maxLength]="5"></sdc-input>
          <sdc-input label="Please Enter Value" required="true" [maxLength]="5"></sdc-input>
          <sdc-input label="Please Enter Value" required="true" [maxLength]="5"></sdc-input>
          <div style="margin:10px 0px;">
            <sdc-button
              text="Show loader"
              (click)="runLoader('generalLoader')">
            </sdc-button>
          </div>
        </div>
      </sdc-loader>
     </div>
     <sdc-button text="Hide loader" (click)="stopLoader('generalLoader')"></sdc-button>
    `
})
export class GeneralLoaderExampleComponent {

    constructor(private loaderService: LoaderService) {

    }

    public runLoader(nameLoader) {
        this.loaderService.registeredLoaders[nameLoader].activate();
        let that = this;
        setTimeout(() => {
          that.loaderService.registeredLoaders[nameLoader].deactivate();
        }, 2000);
    }

    public stopLoader(nameLoader) {
        this.loaderService.registeredLoaders[nameLoader].deactivate();
    }
}
