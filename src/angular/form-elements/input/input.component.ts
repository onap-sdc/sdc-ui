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

import {Component, Input} from '@angular/core';
import { FormElementBase, FormElementBaseInterface } from '../form-base.component';

@Component({
    selector: 'sdc-input',
    templateUrl: './input.component.html',
})
export class InputComponent extends FormElementBase implements FormElementBaseInterface {

    @Input() minLength: number;
    @Input() maxLength: number;

    constructor() {
        super();
    }

    onSave() {
        if (!this.control.invalid){
            this.baseEmitter.emit(this.value);
        }
    }
}
