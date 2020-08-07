import { Component, OnInit, Injector } from '@angular/core';
import { LCUElementContext, LcuElementComponent } from '@lcu/common';

export class LcuDataFlowIotProvisioningPackMachineLearningElementState {}

export class LcuDataFlowIotProvisioningPackMachineLearningContext extends LCUElementContext<LcuDataFlowIotProvisioningPackMachineLearningElementState> {}

export const SELECTOR_LCU_DATA_FLOW_IOT_PROVISIONING_PACK_MACHINE_LEARNING_ELEMENT = 'lcu-data-flow-iot-provisioning-pack-machine-learning-element';

@Component({
  selector: SELECTOR_LCU_DATA_FLOW_IOT_PROVISIONING_PACK_MACHINE_LEARNING_ELEMENT,
  templateUrl: './machine-learning.component.html',
  styleUrls: ['./machine-learning.component.scss']
})
export class LcuDataFlowIotProvisioningPackMachineLearningElementComponent extends LcuElementComponent<LcuDataFlowIotProvisioningPackMachineLearningContext> implements OnInit {
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
