/**
 * Created by ob0695 on 10/23/2017.
 */
import {
    Injectable, Type, ApplicationRef, ComponentFactoryResolver, ComponentRef,
    EmbeddedViewRef, Injector,
} from '@angular/core';


@Injectable()
export class CreateDynamicComponentService {

    constructor(private componentFactoryResolver:ComponentFactoryResolver, private applicationRef:ApplicationRef, private injector:Injector) {
    }

    /**
     * Gets the root view container to inject the component to.
     *
     * @returns {ComponentRef<any>}
     *
     * @memberOf InjectionService
     */
    private getRootViewContainer():ComponentRef<any> {
        const rootComponents = this.applicationRef['_rootComponents'];
        if (rootComponents.length) return rootComponents[0];

        throw new Error('View Container not found! ngUpgrade needs to manually set this via setRootViewContainer.');
    }

    /**
     * Gets the html element for a component ref.
     *
     * @param {ComponentRef<any>} componentRef
     * @returns {HTMLElement}
     *
     * @memberOf InjectionService
     */
    private getComponentRootNode(componentRef:ComponentRef<any>):HTMLElement {
        return (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
    }

    /**
     * Gets the root component container html element.
     *
     * @returns {HTMLElement}
     *
     * @memberOf InjectionService
     */
    private getRootViewContainerNode():HTMLElement {
        return this.getComponentRootNode(this.getRootViewContainer());
    }

    /**
     * Projects the inputs onto the component
     *
     * @param {ComponentRef<any>} component
     * @param {*} options
     * @returns {ComponentRef<any>}
     *
     * @memberOf InjectionService
     */
    public projectComponentInputs(component:ComponentRef<any>, options:any):ComponentRef<any> {
        if (options) {
            const props = Object.getOwnPropertyNames(options);
            for (const prop of props) {
                component.instance[prop] = options[prop];
            }
        }

        return component;
    }

    public createComponentDynamically<T>(componentClass:Type<T>, options:any = {}, location:Element = this.getRootViewContainerNode()):ComponentRef<any> {

        let componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentClass);
        let componentRef = componentFactory.create(this.injector);
        let componentRootNode = this.getComponentRootNode(componentRef);

        // project the options passed to the component instance
        this.projectComponentInputs(componentRef, options);
        this.applicationRef.attachView(componentRef.hostView);

        componentRef.onDestroy(() => {
            this.applicationRef.detachView(componentRef.hostView);
        });

        location.appendChild(componentRootNode);

        return componentRef;
    }
}


