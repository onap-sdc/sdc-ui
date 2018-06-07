import { Injectable, Type, ComponentRef } from '@angular/core';
import { LoaderComponent } from './loader.component';

@Injectable()
export class LoaderService {

    constructor() {}

    private mainLoaderName = 'general';

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

    public activate(name: string) {
        this.registeredLoaders[name] ? this.registeredLoaders[name].activate() : this.registeredLoaders[this.mainLoaderName].activate(); 
    }

    public deactivate(name: string) {
        this.registeredLoaders[name] ? this.registeredLoaders[name].deactivate() : this.registeredLoaders[this.mainLoaderName].deactivate();
    }

}
