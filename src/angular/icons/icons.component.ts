import {Component, Input, PipeTransform, Pipe} from "@angular/core";
import { DomSanitizer } from '@angular/platform-browser';
import * as Icons from '../../iconsMap.json';

export enum Positions{
    Left,
    Right,
    Bottom,
    Top
}

export enum Colors{
    Warning,
    Secondary,
    Positive,
    Negative,
    Primary
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
    @Input() labelPosition : Positions;
    @Input() color:string;
    @Input() disabled: boolean;

    public positions = Positions;
    public colors = Colors;

    public  getFontIconCode():string  {
        let iconhtml;
        Icons[this.iconName] ? iconhtml =  Icons[this.iconName] : iconhtml ='<span class="svg-icon-missing">Missing Icon</span>';
        return iconhtml;
    }

}
