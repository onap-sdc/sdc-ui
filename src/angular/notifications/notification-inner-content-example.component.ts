import {Component, Input} from "@angular/core";

@Component({
    selector: "innernotif-content",
    template: `
        <div>
            <h4>Custom Notification</h4>
            <div>
                <span>{{ notifyTitle }}</span>
            </div>
            <div>
                <span>{{ notifyText }}</span>
            </div>
        </div>
`
})
export class InnerNotifContent {
    @Input() public notifyTitle: string;
    @Input() public notifyText: string;
}
