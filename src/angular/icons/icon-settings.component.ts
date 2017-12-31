import {Component, Input} from "@angular/core";
import { Icons } from '../../iconsMap';
import {Colors, Positions} from "./icons.component";


@Component({
    selector:'sdc-icon-settings',
    templateUrl:'./icons-settings.template.html',
    styles:['.row-settings{' +
    'display:flex' +
    '}' +
    '.item-settings{' +
    'display:flex;' +
    'flex-direction:column;' +
    'margin-right:20px;' +

    '}']
})


export class IconSettingsComponent{
    @Input() label : string;
    @Input() color : string;
    @Input() icon : string;
    @Input() position : Positions;
    @Input() iconNames : string[] = Object.keys(Icons);
    @Input() selectedIcon : string;
    @Input() disabled : boolean;
    public positions = Positions;
    public colors = Colors;
}
