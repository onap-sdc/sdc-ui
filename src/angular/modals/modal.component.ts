/*-
 * ============LICENSE_START=======================================================
 * SDC
 * ================================================================================
 * Copyright (C) 2017 AT&T Intellectual Property. All rights reserved.
 * ================================================================================
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ============LICENSE_END=========================================================
 */

/**
 * Created by rc2122 on 6/1/2017.
 */
import {Component, Input, ViewContainerRef, ViewChild, ComponentRef, ElementRef} from '@angular/core';
import {ButtonModel} from "./button";


@Component({
    selector: 'sdc-modal',
    templateUrl: './modal.component.html'
})

export class ModalComponent {

    @Input() size:string; 'xl|l|md|sm|xsm';
    @Input() title:string;
    @Input() message:string;
    @Input() buttons:Array<ButtonModel>;
    @Input() type:string; 'info|error|alert';
    @Input() onClose: Function;

    @ViewChild('dynamicContentContainer', {read: ViewContainerRef}) dynamicContentContainer:ViewContainerRef; //Allows for custom component as body instead of simple message. See ModalService.createActionModal for implementation details, and HttpService's catchError() for example.

    constructor(private el: ElementRef ) {

    }

    close():void {
        this.onClose();
        console.log(this.el);
    }
}
