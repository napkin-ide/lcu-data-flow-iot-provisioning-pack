import { Component, OnInit, Injector } from '@angular/core';
import { LCUElementContext, LcuElementComponent } from '@lcu/common';

export class LcuDataFlowIotProvisioningPackHotStorageElementState {}

export class LcuDataFlowIotProvisioningPackHotStorageContext extends LCUElementContext<LcuDataFlowIotProvisioningPackHotStorageElementState> {}

export const SelectorLcuDataFlowIotProvisioningPackHotStorageElement = 'lcu-data-flow-iot-provisioning-pack-hot-storage-element';

@Component({
  selector: SelectorLcuDataFlowIotProvisioningPackHotStorageElement,
  templateUrl: './hot-storage.component.html',
  styleUrls: ['./hot-storage.component.scss']
})
export class LcuDataFlowIotProvisioningPackHotStorageElementComponent extends LcuElementComponent<LcuDataFlowIotProvisioningPackHotStorageContext> implements OnInit {
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
