import { Component, OnInit, Injector } from '@angular/core';
import {
  LCUElementContext,
  LcuElementComponent,
  DataFlowModule
} from '@lcu/common';
import { Color, Label } from 'ng2-charts';
import { ChartOptions } from 'chart.js';

export class LcuDataFlowIotProvisioningPackDataStreamElementState {
  public APIKeys?: { [name: string]: string };

  public Chart: {
    Results: any[];
    Colors: Color[];
    Labels: Label[];
    Options: ChartOptions & { annotation: any };
  };
}

export class LcuDataFlowIotProvisioningPackDataStreamContext extends LCUElementContext<
  LcuDataFlowIotProvisioningPackDataStreamElementState
> {
  public Module: DataFlowModule;
}

export const SelectorLcuDataFlowIotProvisioningPackDataStreamElement =
  'lcu-data-flow-iot-provisioning-pack-data-stream-element';

@Component({
  selector: SelectorLcuDataFlowIotProvisioningPackDataStreamElement,
  templateUrl: './data-stream.component.html',
  styleUrls: ['./data-stream.component.scss']
})
export class LcuDataFlowIotProvisioningPackDataStreamElementComponent
  extends LcuElementComponent<LcuDataFlowIotProvisioningPackDataStreamContext>
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
  public Update() {}

  //  Helpers
}
