/**
 * Created by rc2122 on 11/23/2017.
 */
import {Component, EventEmitter, Input, Output} from "@angular/core";
import {FileDataModel} from "./models/FileData";
import template from "./browse.component.html";
@Component({
    selector: 'sdc-browse',
    template: template
})
export class BrowseComponent {
    @Input() public label: string;
    @Input() public disabled: boolean;
    @Input() public placeholder: string;
    @Input() public selectedFile: FileDataModel = new FileDataModel('', '', 0, '');
    @Input() public extensions: string;
    @Input() public name: string;
    @Input() public isRequired: boolean;
    @Output('selectedFileChange') public selectedFileChange: EventEmitter<FileDataModel> = new EventEmitter<FileDataModel>();
    public isValid: boolean = true;
    private selectedFileChanged = (selectedFile: FileDataModel): void => {
        const selectedFileExt = selectedFile.filename.slice(selectedFile.filename.lastIndexOf('.') + 1).toLowerCase();
        if (this.extensions.toLowerCase().indexOf(selectedFileExt) > -1) {
            this.isValid = true;
        } else {
            this.isValid = false;
        }
        this.selectedFile = selectedFile;
        this.selectedFileChange.emit(this.selectedFile);
    }
    private deleteFile = (): void => {
        this.selectedFileChanged(new FileDataModel('', '', 0, ''));
    }
}

