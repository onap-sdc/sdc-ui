export default `
<div class="sdc-tag-cloud-new-item-field" [ngClass]="{'not-empty': newTagItem}">
    <sdc-input [label]="label"
               [disabled]="(isViewOnly===true)"
               [placeHolder]="placeholder"
               [(value)]="newTagItem"
               (keyup)="onKeyup($event)"
               [ngClass]="{'error': uniqueError}"></sdc-input>
    <div class="add-button" (click)="newTagItem && insertItemToList()" [ngClass]="{'disabled': !newTagItem || uniqueError}">
        <span class="plus-icon">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24" viewBox="0 0 24 24">
              <defs>
                <path id="add-a" d="M15,7 L9,7 L9,1 C9,0.4 8.6,0 8,0 C7.4,0 7,0.4 7,1 L7,7 L1,7 C0.4,7 0,7.4 0,8 C0,8.6 0.4,9 1,9 L7,9 L7,15 C7,15.6 7.4,16 8,16 C8.6,16 9,15.6 9,15 L9,9 L15,9 C15.6,9 16,8.6 16,8 C16,7.4 15.6,7 15,7"/>
              </defs>
              <g fill="none" fill-rule="evenodd" transform="translate(4 4)">
                <use xlink:href="#add-a"/>
              </g>
            </svg>
        </span>
    </div>
</div>
<div class="sdc-list-container">
    <sdc-tag-item *ngFor="let item of list; let i = index;"
                   [text]="item"
                   [index]="i"
                   [isViewOnly]="isViewOnly && (isViewOnly === true || isViewOnly.indexOf(i) > -1)"
                   (clickOnDelete)="deleteItemFromList($event)"></sdc-tag-item>
</div>
<div class="error-message" *ngIf="uniqueError">{{uniqueErrorMessage}}</div>
`;
