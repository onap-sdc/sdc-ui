import {Component, Input, ElementRef, OnInit} from "@angular/core";


@Component({
    selector:'sdc-tile-info',
    templateUrl:'./tile-info.component.html',
    host:{ class: 'sdc-tile-content'}
})

export class TileInfoComponent  implements OnInit {
    private footerExists: boolean = false;
    @Input() public text: string;
    @Input() public color: string;
    @Input() public icon: string;
    @Input() public pre_title: string;

    constructor(private elRef: ElementRef){}

    ngOnInit() {
        let tile = this.elRef.nativeElement.parentElement;
        this.footerExists = tile.getElementsByClassName('sdc-tile-footer').length;
    }
}

