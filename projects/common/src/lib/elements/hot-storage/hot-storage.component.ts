import { Component, OnInit, Injector } from '@angular/core';
import { LCUElementContext, LcuElementComponent } from '@lcu/common';
import { InfrastructureModel } from '../../models/infrastructure.model';

export class LcuDataFlowIotProvisioningPackHotStorageElementState {
  public Infrastructure: InfrastructureModel;
}

export class LcuDataFlowIotProvisioningPackHotStorageContext extends 
LCUElementContext<LcuDataFlowIotProvisioningPackHotStorageElementState> {}

export const SelectorLcuDataFlowIotProvisioningPackHotStorageElement = 'lcu-data-flow-iot-provisioning-pack-hot-storage-element';

@Component({
  selector: SelectorLcuDataFlowIotProvisioningPackHotStorageElement,
  templateUrl: './hot-storage.component.html',
  styleUrls: ['./hot-storage.component.scss']
})
export class LcuDataFlowIotProvisioningPackHotStorageElementComponent extends 
LcuElementComponent<LcuDataFlowIotProvisioningPackHotStorageContext> implements OnInit {
  //  Fields

  //  Properties
  /**
   * Connection string title
   */
  public Title: string;

  //  Constructors
  constructor(protected injector: Injector) {
    super(injector);

    this.Title = 'Hot Storage Connection Strings';
  }

  //  Life Cycle
  public ngOnInit() {
    super.ngOnInit();
  }

  //  API Methods

  //  Helpers
}
