export default `
<div *ngIf="showLoader">
    <div class="tlv-loader-back tlv-loader-relative" ></div>
    <div class="tlv-loader {{size}}"></div>    
</div>
<ng-content></ng-content>
`;
