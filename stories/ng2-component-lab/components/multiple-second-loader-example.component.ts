import { Component, Input } from "@angular/core";
import { LoaderService } from "../../../src/angular/loader/loader.service";
import { setTimeout } from "timers";

@Component({
    selector: "multiple-loader-second-example",
    template: `
      <div style="border:1px solid black; padding:20px 100px; background:red; width:100px; hight:100px;">
      <h3>Second component</h3>
        <div style="margin:10px 0px;">
          <sdc-button text="Show" (click)="runLoader('multiple')">
          </sdc-button>
        </div>
      </div>
   `
})

export class MultipleLoaderSecondExampleComponent {

    constructor(private loaderService: LoaderService) {}

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
