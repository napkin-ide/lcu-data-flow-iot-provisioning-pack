import { Component, OnInit, Injector } from '@angular/core';
import { LCUElementContext, LcuElementComponent } from '@lcu/common';

export class LcuDataFlowIotProvisioningPackDeviceStreamElementState {}

export class LcuDataFlowIotProvisioningPackDeviceStreamContext extends LCUElementContext<LcuDataFlowIotProvisioningPackDeviceStreamElementState> {}

export const SelectorLcuDataFlowIotProvisioningPackDeviceStreamElement = 'lcu-data-flow-iot-provisioning-pack-device-stream-element';

@Component({
  selector: SelectorLcuDataFlowIotProvisioningPackDeviceStreamElement,
  templateUrl: './device-stream.component.html',
  styleUrls: ['./device-stream.component.scss']
})
export class LcuDataFlowIotProvisioningPackDeviceStreamElementComponent extends LcuElementComponent<LcuDataFlowIotProvisioningPackDeviceStreamContext> implements OnInit {
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
