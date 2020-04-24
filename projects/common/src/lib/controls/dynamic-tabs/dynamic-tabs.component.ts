import { Component, OnInit, Input, ComponentFactoryResolver, ViewChild, ViewContainerRef, AfterViewInit } from '@angular/core';
import { ConnectionStringsComponent } from '../connection-strings/connection-strings.component';

export class ComponentTabsModel {
  public Component: Component;
  public Lable: string;
}

@Component({
  selector: 'lcu-dynamic-tabs',
  templateUrl: './dynamic-tabs.component.html',
  styleUrls: ['./dynamic-tabs.component.scss']
})
export class DynamicTabsComponent implements OnInit, AfterViewInit  {

  // tslint:disable-next-line:no-input-rename
  @Input('tab-components')
  public TabComponents: Array<ComponentTabsModel>;

  public Components = [ConnectionStringsComponent];

  @ViewChild('container', {read: ViewContainerRef, static: false})
  public viewContainer: ViewContainerRef;

  constructor(protected componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {

  }

  public ngAfterViewInit(): void {
    this.renderComponent(0);
  }

  public tabChange(index: number) {
    setTimeout(() => {
        this.renderComponent(index);
    });
  }

  private renderComponent(index: number) {
      const factory = this.componentFactoryResolver.resolveComponentFactory(this.Components[index]);
      this.viewContainer.createComponent(factory);
  }

}
