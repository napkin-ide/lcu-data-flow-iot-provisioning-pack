import { Component, OnInit, Injector } from '@angular/core';
import { LCUElementContext, LcuElementComponent } from '@lcu/common';

export class LcuDataFlowIotProvisioningPackColdStorageElementState {}

export class LcuDataFlowIotProvisioningPackColdStorageContext extends LCUElementContext<LcuDataFlowIotProvisioningPackColdStorageElementState> {}

export const SelectorLcuDataFlowIotProvisioningPackColdStorageElement = 'lcu-data-flow-iot-provisioning-pack-cold-storage-element';

@Component({
  selector: SelectorLcuDataFlowIotProvisioningPackColdStorageElement,
  templateUrl: './cold-storage.component.html',
  styleUrls: ['./cold-storage.component.scss']
})
export class LcuDataFlowIotProvisioningPackColdStorageElementComponent extends LcuElementComponent<LcuDataFlowIotProvisioningPackColdStorageContext> implements OnInit {
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
