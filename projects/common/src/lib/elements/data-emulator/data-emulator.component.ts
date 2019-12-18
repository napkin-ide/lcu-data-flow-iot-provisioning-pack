import { Component, OnInit, Injector } from '@angular/core';
import { LCUElementContext, LcuElementComponent } from '@lcu/common';

export class LcuDataFlowIotProvisioningPackDataEmulatorElementState {}

export class LcuDataFlowIotProvisioningPackDataEmulatorContext extends LCUElementContext<LcuDataFlowIotProvisioningPackDataEmulatorElementState> {}

export const SelectorLcuDataFlowIotProvisioningPackDataEmulatorElement = 'lcu-data-flow-iot-provisioning-pack-data-emulator-element';

@Component({
  selector: SelectorLcuDataFlowIotProvisioningPackDataEmulatorElement,
  templateUrl: './data-emulator.component.html',
  styleUrls: ['./data-emulator.component.scss']
})
export class LcuDataFlowIotProvisioningPackDataEmulatorElementComponent extends LcuElementComponent<LcuDataFlowIotProvisioningPackDataEmulatorContext> implements OnInit {
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
