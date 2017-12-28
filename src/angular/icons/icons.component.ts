import {Component, Input, PipeTransform, Pipe} from "@angular/core";
import { DomSanitizer } from '@angular/platform-browser';
import { Icons } from '../../iconsMap';

export enum Positions{
    left,
    right,
    bottom,
    top
}

@Pipe({ name: 'safeHtml'})

export class SafeHtmlPipe implements PipeTransform  {
    constructor(private sanitized: DomSanitizer) {}
    transform(value) {
        return this.sanitized.bypassSecurityTrustHtml(value);
    }
}


@Component({
    selector:'sdc-icon',
    templateUrl:'./icons.component.html'
})


export class IconsComponent{
    @Input() iconName: string;
    @Input() label : string;
    @Input() labelPosition : string;
    @Input() color:string;
    @Input() disabled: boolean;

    public  getFontIconCode(name):string  {
        let iconhtml;
        Icons[this.iconName] ? iconhtml =  Icons[this.iconName] : iconhtml ='<span class="svg-icon-missing">Missing Icon</span>';
        return iconhtml;
    }
}
