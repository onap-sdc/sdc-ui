export default `
<div class="sdc-browse" [ngClass]="{'disabled': disabled}">
    <div class="selected-file-field">
        <sdc-input [label]="label" [placeHolder]="placeholder" [required]="isRequired" [name]="name" [disabled]="true" [(value)]="selectedFile.filename"></sdc-input>
    </div>
    <div class="delete-icon" *ngIf="!disabled && selectedFile.filename" (click)="deleteFile()">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24" viewBox="0 0 24 24">
            <defs>
                <path id="close-a" d="M13.5996,12 L19.6576,5.942 C20.1146,5.485 20.1146,4.8 19.6576,4.343 C19.2006,3.886 18.5146,3.886 18.0576,4.343 L11.9996,10.4 L5.9426,4.343 C5.4856,3.886 4.7996,3.886 4.3426,4.343 C3.8856,4.8 3.8856,5.485 4.3426,5.942 L10.4006,12 L4.3426,18.058 C3.8856,18.515 3.8856,19.2 4.3426,19.657 C4.5716,19.886 4.7996,20 5.1426,20 C5.4856,20 5.7136,19.886 5.9426,19.657 L11.9996,13.6 L18.0576,19.657 C18.2866,19.886 18.6286,20 18.8576,20 C19.0856,20 19.4286,19.886 19.6576,19.657 C20.1146,19.2 20.1146,18.515 19.6576,18.058 L13.5996,12 Z"/>
            </defs>
            <g fill="none" fill-rule="evenodd">
                <use xlink:href="#close-a"/>
            </g>
        </svg>
    </div>
    <label class="browse-button">
        <file-opener *ngIf="!disabled" [extensions]="extensions" (onFileUpload)="selectedFileChanged($event)"></file-opener>
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24" viewBox="0 0 24 24">
                <defs>
                    <path id="browse-a" d="M1.55555556,3.11111111 C0.696445945,3.11111111 0,2.41466517 0,1.55555556 C0,0.696445945 0.696445945,0 1.55555556,0 C2.41466517,0 3.11111111,0.696445945 3.11111111,1.55555556 C3.11111111,2.41466517 2.41466517,3.11111111 1.55555556,3.11111111 Z M12.4444444,3.11111111 C11.5853348,3.11111111 10.8888889,2.41466517 10.8888889,1.55555556 C10.8888889,0.696445945 11.5853348,0 12.4444444,0 C13.3035541,0 14,0.696445945 14,1.55555556 C14,2.41466517 13.3035541,3.11111111 12.4444444,3.11111111 Z M7,3.11111111 C6.14089039,3.11111111 5.44444444,2.41466517 5.44444444,1.55555556 C5.44444444,0.696445945 6.14089039,0 7,0 C7.85910961,0 8.55555556,0.696445945 8.55555556,1.55555556 C8.55555556,2.41466517 7.85910961,3.11111111 7,3.11111111 Z"/>
                </defs>
                <g fill="none" fill-rule="evenodd" transform="translate(5 10)">
                    <use xlink:href="#browse-a"/>
                </g>
            </svg>
        </div>
    </label>
</div>
`;

