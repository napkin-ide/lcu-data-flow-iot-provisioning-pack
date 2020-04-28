import { Component, OnInit, Injector } from '@angular/core';
import { LCUElementContext, LcuElementComponent } from '@lcu/common';
import { LCUChart } from '../../models/chart';

export class LcuDataFlowIotProvisioningPackDataMapElementState {
  public ActivityLogs?: string[];

  public Devices?: any[];

  public Chart: LCUChart;
}

export class LcuDataFlowIotProvisioningPackDataMapContext extends LCUElementContext<
  LcuDataFlowIotProvisioningPackDataMapElementState
> {}

export const SelectorLcuDataFlowIotProvisioningPackDataMapElement =
  'lcu-data-flow-iot-provisioning-pack-data-map-element';

@Component({
  selector: SelectorLcuDataFlowIotProvisioningPackDataMapElement,
  templateUrl: './data-map.component.html',
  styleUrls: ['./data-map.component.scss']
})
export class LcuDataFlowIotProvisioningPackDataMapElementComponent
  extends LcuElementComponent<LcuDataFlowIotProvisioningPackDataMapContext>
  implements OnInit {
  //  Fields

  //  Properties

  //  Constructors
  constructor(protected injector: Injector) {
    super(injector);
  }

  //  Life Cycle
  public ngOnInit() {
    super.ngOnInit();
  }

  //  API Methods
  public EnableActivityLogs() {
    alert('Enabling Activity Logs');
  }
  //  Helpers
}
