export default `
<div class="sdc-validation" *ngIf="show && !control.valid">
    <template #errorsList let-errors="errors" let-errorsPath="errorsPath" let-errorKey="errorKey">
        <div *ngIf="errors?.charAt" class="error-str">
            <i *ngIf="errorsPath">{{errorsPath}}:</i> {{errors}}
        </div>
        
        <div *ngIf="!errors?.charAt && errors?.length" class="error-sub-list">
            <ng-container *ngFor="let error of errors" [ngTemplateOutlet]="errorsList" [ngOutletContext]="{errors: error, errorsPath: errorsPath}"></ng-container>
        </div>
        
        <ng-container *ngIf="errors?._validationMeta">
            <div class="errors-list" *ngFor="let errKey of errors._validationMeta.order">
                <ng-container *ngIf="errors[errKey]" [ngTemplateOutlet]="errorsList" [ngOutletContext]="{errors: errors[errKey], errorsPath: ((errorsPath) ? errorsPath+'.'+errorKey : errorKey), errorKey: errKey}"></ng-container>
            </div>
        </ng-container>
    </template>
    <ng-container [ngTemplateOutlet]="errorsList" [ngOutletContext]="{errors: control.errors, errorsPath: '', errorKey: ''}"></ng-container>
</div>
`;
