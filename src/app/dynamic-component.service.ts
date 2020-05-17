import { Injectable, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DynamicComponentService {

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  createDynamicComponent(view: ViewContainerRef, component: any) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
    view.clear();
    return view.createComponent(componentFactory);
  }

}
