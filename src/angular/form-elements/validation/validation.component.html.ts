export default `
<div class="sdc-validation" *ngIf="show && !control.valid">
    <template #errorsList let-errors>
        <div *ngFor="let error of errors" class="errors-list">
            <div *ngIf="typeof(error) === 'string'" class="error-str">
                {{error}}
            </div>
            <ng-container *ngIf="typeof(error) !== 'string'" ngTemplateOutlet="errorsList; context: {$implicit: error}"></ng-container>
        </div>
    </template>
</div>
`;
