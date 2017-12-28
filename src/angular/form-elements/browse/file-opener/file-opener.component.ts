/**
 * Created by rc2122 on 11/12/2017.
 */
import {Component, EventEmitter, Input, Output} from "@angular/core";
import {FileDataModel} from "../models/FileData";
import template from "./file-opener.component.html";
@Component({
    selector: 'file-opener',
    template: template
})
export class FileOpenerComponent {
    @Output() public onFileUpload: EventEmitter<FileDataModel> = new EventEmitter<FileDataModel>();
    @Input() public extensions: string;
    private onFileSelect = (event) => {
        const file: File = event.target.files[0];
        const myReader: FileReader = new FileReader();

        myReader.onloadend = (e) => {
            this.onFileUpload.emit(new FileDataModel(myReader.result, file.name, file.size, file.type));
        }
        myReader.readAsDataURL(file);
    }

    private getExtensionsWithDot = (): string => {
        if (this.extensions) {
            let ret = this.extensions.split(',').map((ext: string) => {
                return "." + ext.toString();
            });
            return ret.join(",");
        }
        return null;
    }
}
