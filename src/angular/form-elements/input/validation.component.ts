import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

export interface inputOption{
    type:string;
    message:string;
    pattern?: string;
    callBack?: any;
}

export class ValidationComponent{
    @Input() public Options: inputOption[];
    @Output('valueCheck') baseEmitter: EventEmitter<any> = new EventEmitter<any>();
}
