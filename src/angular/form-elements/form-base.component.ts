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

import { Component, EventEmitter, Input, Output } from '@angular/core'
import { FormControl } from '@angular/forms';

export interface FormElementBaseInterface {
    onSave(): void;
}

@Component({
    template: ``,
    styles: []
})
export class FormElementBase {

    protected control: FormControl;

    // Two way binding for value (need to write the "Change" word like this)
    @Output('valueChange') baseEmitter: EventEmitter<any> = new EventEmitter<any>();
    @Input('value') set setValueValue(value: any) {
        this.value = value;
    }

    @Input() label: string;
    @Input() type: string;
    @Input() value: any;
    @Input() pattern: any;
    @Input() disabled: boolean;
    @Input() placeHolder: string;
    @Input() required: boolean;

    constructor() {
        this.control = new FormControl('', []);
    }

}
