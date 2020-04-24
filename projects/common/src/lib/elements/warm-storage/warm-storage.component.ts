import { InfrastructureModel } from './../../models/infrastructure.model';
import { Component, OnInit, Injector } from '@angular/core';
import { LCUElementContext, LcuElementComponent } from '@lcu/common';

export class LcuDataFlowIotProvisioningPackWarmStorageElementState {
  public Infrastructure: InfrastructureModel;
}

export class LcuDataFlowIotProvisioningPackWarmStorageContext extends
LCUElementContext<LcuDataFlowIotProvisioningPackWarmStorageElementState> {}

export const SelectorLcuDataFlowIotProvisioningPackWarmStorageElement = 'lcu-data-flow-iot-provisioning-pack-warm-storage-element';

@Component({
  selector: SelectorLcuDataFlowIotProvisioningPackWarmStorageElement,
  templateUrl: './warm-storage.component.html',
  styleUrls: ['./warm-storage.component.scss']
})

export class LcuDataFlowIotProvisioningPackWarmStorageElementComponent extends
LcuElementComponent<LcuDataFlowIotProvisioningPackWarmStorageContext> implements OnInit {
  //  Fields

  //  Properties

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
  public ngOnInit() {
    super.ngOnInit();
  }

  //  API Methods

  //  Helpers
}
