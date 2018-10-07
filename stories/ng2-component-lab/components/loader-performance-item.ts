import { Component, Input, Output,EventEmitter } from "@angular/core";
import { setTimeout } from "timers";

@Component({
    selector: "loader-perfomance-item",
    template: `
      <div style="border:1px solid black; padding:20px 100px; background:{{color}}; width:100px; hight:100px;">
      <h3>Second component</h3>
        <div style="margin:10px 0px;">
          {{ (isRunning) ? 'LOADING...' : '' }}
          <sdc-button text="Show" (click)="startProcess('multiple')">
          </sdc-button>
        </div>
      </div>
   `
})

export class LoaderPerfomanceItem {
    @Input() color: string;
    @Input() timeout: number;
    @Output() runProcess: EventEmitter<boolean> = new EventEmitter<boolean>();
    public isRunning: boolean;

    constructor() {}

    public startProcess() {
        this.isRunning = true;
        this.runProcess.emit(this.isRunning);
        setTimeout(() => {
            this.isRunning = false;
            this.runProcess.emit(this.isRunning);
        }, this.timeout);
    }
}
