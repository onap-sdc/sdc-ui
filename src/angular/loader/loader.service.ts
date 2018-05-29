import { Injectable, Type, ComponentRef } from '@angular/core';
import { LoaderComponent } from './loader.component';

@Injectable()
export class LoaderService {

    constructor() {}

    public registeredLoaders = {};

    public register(name: string, loader: LoaderComponent) {
        if (!this.registeredLoaders[name]) {
            this.registeredLoaders[name] = loader;
        }
    }

    public unregister(name: string) {
        if (this.registeredLoaders[name]) {
            delete this.registeredLoaders[name];
        }
    }

    public activate(name: string = 'general') {
        if (this.registeredLoaders[name]) {
            this.registeredLoaders[name].activate();
        }
    }

    public deactivate(name: string = 'general') {
        if (this.registeredLoaders[name]) {
            this.registeredLoaders[name].deactivate();
        }
    }
}
