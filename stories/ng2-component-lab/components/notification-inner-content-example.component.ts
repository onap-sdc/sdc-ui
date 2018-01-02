import {Component, Input} from "@angular/core";

@Component({
    selector: "innernotif-content",
    template: `
        <div>
            <div style="background-color: #4a0263">
                <span>{{notifyTitle}}</span>
            </div>
            <div style="background-color: #5e001f">
                <span>{{notifyText}}</span>
            </div>
        </div>
`
})
export class InnerNotifContent {

    @Input() notifyTitle:string;
    @Input() notifyText:string;
}
