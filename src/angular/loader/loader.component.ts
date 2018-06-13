import { Component, Input, ViewContainerRef, Inject, OnInit, OnDestroy, Output, EventEmitter } from "@angular/core";
import template from "./loader.component.html";
import { LoaderService } from "./loader.service";

export enum LoaderSize {
    large = 'large',
    medium = 'medium',
    small = 'small',
}

@Component({
    selector: "sdc-loader",
    template: template
})

export class LoaderComponent implements OnInit, OnDestroy {
    @Input() active: number;
    @Input() size?: LoaderSize; // small || medium || large
    @Input() global?: boolean; // If is relative is set to true, loader will appear over parent element. Otherwise, will be fixed over the entire page.
    @Input() name?: string;
    @Output() activeChange: EventEmitter<number> = new EventEmitter<number>();

    constructor(private loaderService: LoaderService) {
        this.active = 0;
        this.size = LoaderSize.large;
        this.global = false;
    }

    public ngOnInit(): void {
        if (this.name !== undefined) {
            this.loaderService.register(this.name, this);
        }
    }

    public ngOnDestroy(): void {
        if (this.name !== undefined) {
            this.loaderService.unregister(this.name);
        }
    }

    public activate() {
        this.active++;
        this.activeChange.emit(this.active);
    }

    public deactivate() {
        if (this.active > 0) {
            this.active--;
            this.activeChange.emit(this.active);
        }
    }

}
