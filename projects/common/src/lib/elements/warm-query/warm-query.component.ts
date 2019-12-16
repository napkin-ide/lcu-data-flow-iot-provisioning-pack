import { Component, OnInit, Injector } from '@angular/core';
import { LCUElementContext, LcuElementComponent } from '@lcu/common';

export class LcuDataFlowIotProvisioningPackWarmQueryElementState {}

export class LcuDataFlowIotProvisioningPackWarmQueryContext extends LCUElementContext<LcuDataFlowIotProvisioningPackWarmQueryElementState> {}

export const SelectorLcuDataFlowIotProvisioningPackWarmQueryElement = 'lcu-data-flow-iot-provisioning-pack-warm-query-element';

@Component({
  selector: SelectorLcuDataFlowIotProvisioningPackWarmQueryElement,
  templateUrl: './warm-query.component.html',
  styleUrls: ['./warm-query.component.scss']
})
export class LcuDataFlowIotProvisioningPackWarmQueryElementComponent extends LcuElementComponent<LcuDataFlowIotProvisioningPackWarmQueryContext> implements OnInit {
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

  //  Helpers
}
