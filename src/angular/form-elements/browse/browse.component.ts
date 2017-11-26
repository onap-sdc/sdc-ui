/**
 * Created by rc2122 on 11/23/2017.
 */
import {Component, EventEmitter, Input, Output} from "@angular/core";
import {FileDataModel} from "./models/FileData";
@Component({
    selector: 'sdc-browse',
    templateUrl: './browse.component.html'
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
    private selectedFileChanged = (selectedFile: FileDataModel): void => {
        this.selectedFile = selectedFile;
        this.selectedFileChange.emit(this.selectedFile);
    }
    private deleteFile = (): void => {
        this.selectedFileChanged(new FileDataModel('', '', 0, ''));
    }
}

