import { LCUChart } from './../../models/chart';
import { InfrastructureModel } from './../../models/infrastructure.model';
import { Component, OnInit, Injector, AfterViewInit } from '@angular/core';
import { LCUElementContext, LcuElementComponent } from '@lcu/common';
import { TabComponentModel } from '../../models/component-tab.model';
import { ConnectionStringsComponent } from '../../controls/connection-strings/connection-strings.component';
import { ChartsComponent } from '../../controls/charts/charts.component';

export class LcuDataFlowIotProvisioningPackWarmStorageElementState {
  public Chart: LCUChart;

  public Infrastructure: InfrastructureModel;
}

export class LcuDataFlowIotProvisioningPackWarmStorageContext extends
LCUElementContext<LcuDataFlowIotProvisioningPackWarmStorageElementState> {}

export const SelectorLcuDataFlowIotProvisioningPackWarmStorageElement =
'lcu-data-flow-iot-provisioning-pack-warm-storage-element';

@Component({
  selector: SelectorLcuDataFlowIotProvisioningPackWarmStorageElement,
  templateUrl: './warm-storage.component.html',
  styleUrls: ['./warm-storage.component.scss']
})

export class LcuDataFlowIotProvisioningPackWarmStorageElementComponent extends
LcuElementComponent<LcuDataFlowIotProvisioningPackWarmStorageContext> implements OnInit, AfterViewInit {
  //  Fields

  //  Properties

  public Components: Array<TabComponentModel>;

  /**
   * Connection string title
   */
  public Title: string;

  //  Constructors
  constructor(protected injector: Injector) {
    super(injector);

    this.Title = 'Warm Storage Connection Strings';
  }

  //  Life Cycle
  public ngOnInit(): void {
    super.ngOnInit();
  }

  public ngAfterViewInit(): void {
    this.setupComponents();
  }

  //  API Methods

  //  Helpers

  public GetStrings(): void {
    this.setupComponents();
  }

  /**
   * Set components for this 
   */
  protected setupComponents(): void {
    this.Components = [
      new TabComponentModel({ Component: ChartsComponent,
                              Data: this.context.State.Chart,
                              Label: 'Overview' }),
      new TabComponentModel({ Component: ConnectionStringsComponent,
                              Data: this.context.State.Infrastructure.Connections,
                              Label: 'Connection Strings' })
    ];
  }
}
