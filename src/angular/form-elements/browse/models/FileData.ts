/**
 * Created by rc2122 on 11/23/2017.
 */
export class FileDataModel  {
    public base64: string;
    public filename: string;
    public filesize: number;
    public filetype: string;
    constructor(base64: string, filename: string, filesize: number, filetype: string) {
        const prefixToRemove: string = "data:;base64,";
        this.base64 = base64.startsWith(prefixToRemove) ? base64.slice(prefixToRemove.length) : base64;
        this.filename = filename;
        this.filesize = filesize;
        this.filetype = filetype;
    }
}
