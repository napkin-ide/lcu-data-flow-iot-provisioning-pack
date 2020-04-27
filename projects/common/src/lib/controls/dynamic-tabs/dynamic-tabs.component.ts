import { 
  Component, 
  OnInit, 
  Input, 
  ComponentFactoryResolver, 
  ViewChild, 
  ViewContainerRef, 
  AfterViewInit, 
  ComponentRef, 
  ElementRef, 
  ComponentFactory} from '@angular/core';

import { ComponentTabModel } from '../../models/component-tab.model';

@Component({
  selector: 'lcu-dynamic-tabs',
  templateUrl: './dynamic-tabs.component.html',
  styleUrls: ['./dynamic-tabs.component.scss']
})

export class DynamicTabsComponent implements OnInit, AfterViewInit  {

  // tslint:disable-next-line:no-input-rename
  @Input('tab-components')
  public TabComponents: Array<ComponentTabModel>;

  @ViewChild('container', {read: ViewContainerRef, static: false})
  protected viewContainer: ViewContainerRef;

  constructor(protected componentFactoryResolver: ComponentFactoryResolver) { }

  // Lifecycle hook
  public ngOnInit(): void {

  }

  public ngAfterViewInit(): void {
    this.renderComponent(0);
  }

  /**
   * Tab change event
   *
   * @param index selected tab index
   */
  public TabChange(index: number): void {
    setTimeout(() => {
        this.renderComponent(index);
    }, 1000);
  }

  /**
   * Render component for the active tab
   *
   * @param index TabComponents index position
   */
  protected renderComponent(index: number) {

      // factory for creating a dynamic component
      const factory: ComponentFactory<any> = this.componentFactoryResolver
      .resolveComponentFactory(this.TabComponents[index].Component);

      // component created by a factory
      const componentRef: ComponentRef<any> = this.viewContainer.createComponent(factory);

      // current component instance
      const instance: DynamicTabsComponent = componentRef.instance as DynamicTabsComponent;

      // find the current component in TabComponents and set its data
      this.TabComponents.find((comp: ComponentTabModel) => {
        if (comp.Component.name === instance.constructor.name) {
          instance['Data'] = comp.Data;
        }
      });
  }
}
