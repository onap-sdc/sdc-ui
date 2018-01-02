export default `
<div *ngIf="!destroy" class="sdc-notification" (click)="dismiss()">
    <div class="ngn {{'ngn-' + type}}" [ngClass]="{'ngn-top-right': position=='top-right','ngn-top': position=='top','ngn-bottom':position=='bottom','ngn-fixed':location=='body','ngn-sticky':sticky==true, 'ngn-fade':fade==true, 'ngn-transHeight':transheight==true}">
        <div #dynamicContentContainer></div>
        <div *ngIf="!hasDynamicContent()">
            <div class="ngn-close" (click)="dismiss()">
            </div>
            <div class="ttl">
                <span>{{notifyTitle}}</span>
            </div>
            <div class="msg">
                <span>{{notifyText}}</span>
            </div>
        </div>
    </div>
</div>
`;
