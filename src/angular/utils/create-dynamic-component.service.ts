import { Injectable, Type, ApplicationRef, ComponentFactoryResolver, ComponentRef, EmbeddedViewRef, Injector } from '@angular/core';
import { ViewContainerRef } from '@angular/core/src/linker/view_container_ref';

@Injectable()
export class CreateDynamicComponentService {

    constructor(private componentFactoryResolver: ComponentFactoryResolver,
                private applicationRef: ApplicationRef,
                private injector: Injector) {
    }

    /**
     * Gets the root view container to inject the component to.
     *
     * @returns {ComponentRef<any>}
     *
     * @memberOf InjectionService
     */
    private getRootViewContainer(): ComponentRef<any> {
        const rootComponents = this.applicationRef['_rootComponents']; // Angular2
        // const rootComponents = this.applicationRef['components']; // Angular5
        if (rootComponents.length) {
            return rootComponents[0];
        }
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
    private getComponentRootNode(componentRef: ComponentRef<any>): HTMLElement {
        return (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
    }

    /**
     * Gets the root component container html element.
     *
     * @returns {HTMLElement}
     *
     * @memberOf InjectionService
     */
    private getRootViewContainerNode(): HTMLElement {
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
    private projectComponentInputs(component: ComponentRef<any>, options: any): ComponentRef<any> {
        if (options) {
            const props = Object.getOwnPropertyNames(options);
            for (const prop of props) {
                component.instance[prop] = options[prop];
            }
        }

        return component;
    }

    public createComponentDynamically<T>(componentClass: Type<T>, options: any = {}, location: Element = this.getRootViewContainerNode()): ComponentRef<any> {
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentClass);
        const componentRef = componentFactory.create(this.injector);
        const componentRootNode = this.getComponentRootNode(componentRef);

        // project the options passed to the component instance
        this.projectComponentInputs(componentRef, options);
        this.applicationRef.attachView(componentRef.hostView);

        componentRef.onDestroy(() => {
            this.applicationRef.detachView(componentRef.hostView);
        });

        location.appendChild(componentRootNode);
        return componentRef;
    }

    /**
     * Inserts a component into an existing viewContainer
     * @param componentType - type of component to create
     * @param options - Inputs to project on new component
     * @param vcRef - viewContainerRef in which to insert the newly created component
     */
    public insertComponentDynamically<T>(componentType: Type<T>, options: any = {}, vcRef: ViewContainerRef): ComponentRef<any> {
        const factory = this.componentFactoryResolver.resolveComponentFactory(componentType);
        const dynamicComponent = factory.create(vcRef.parentInjector);
        this.projectComponentInputs(dynamicComponent, options);
        vcRef.insert(dynamicComponent.hostView);
        return dynamicComponent;
    }
}
