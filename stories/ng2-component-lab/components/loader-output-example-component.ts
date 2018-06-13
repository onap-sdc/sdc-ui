import { Component, Input, Output, EventEmitter, ComponentRef, ViewChild, ViewChildren, QueryList } from "@angular/core";
import { setTimeout } from "timers";
import { LoaderPerfomanceItem } from "./loader-performance-item";
import { LoaderComponent } from "../../../src/angular/loader/loader.component";

@Component({
    selector: "loader-output-example",
    template: `
      <div style="border:1px solid black; padding:20px 100px; background:{{color}}; width:100px; hight:100px;">
        <sdc-loader name="output" #outputLoader>
            <button (click)="startItems()">Start Processes</button>
            <loader-perfomance-item color="red" [timeout]="2000" (runProcess)="runLoader($event)"></loader-perfomance-item>
            <loader-perfomance-item color="yellow" [timeout]="3000" (runProcess)="runLoader($event)"></loader-perfomance-item>
            <loader-perfomance-item color="green" [timeout]="4000" (runProcess)="runLoader($event)"></loader-perfomance-item>
        </sdc-loader>
      </div>
   `
})

export class LoaderOutputExapleCompnent {
    @ViewChild('outputLoader') loader: LoaderComponent;
    @ViewChildren(LoaderPerfomanceItem) items: QueryList<LoaderPerfomanceItem>;

    public runLoader(event) {
        (event) ? this.loader.activate() : this.loader.deactivate();
    }

    public startItems() {
        this.items.forEach((item) => {
            item.startProcess();
        });
    }
}
