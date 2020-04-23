import { InfrastructureModel } from './../../models/infrastructure.model';
import { Component, OnInit, Injector } from '@angular/core';
import {
  LCUElementContext,
  LcuElementComponent,
  DataFlowModule
} from '@lcu/common';
import { LCUChart } from '../../models/chart';
import { ConnectionStringModel } from '../../models/connection-string.model';

export class LcuDataFlowIotProvisioningPackDataStreamElementState {
  public ActivityLogs?: string[];

  public APIKeys?: { Name: string, Value: string }[];

  public Chart: LCUChart;

  public Infrastructure: InfrastructureModel;
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
  public AddAPIKey() {
    alert('Adding API Key');
  }

  public EnableActivityLogs() {
    alert('Enabling Activity Logs');
  }

  //  Helpers
}
