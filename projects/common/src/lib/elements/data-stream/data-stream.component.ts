import { Component, OnInit, Injector } from "@angular/core";
import { LCUElementContext, LcuElementComponent } from "@lcu/common";

export class LcuDataFlowIotProvisioningPackDataStreamElementState {
  public SomeProperty?: string;
}

export class LcuDataFlowIotProvisioningPackDataStreamContext extends LCUElementContext<
  LcuDataFlowIotProvisioningPackDataStreamElementState
> {}

export const SelectorLcuDataFlowIotProvisioningPackDataStreamElement =
  "lcu-data-flow-iot-provisioning-pack-data-stream-element";

@Component({
  selector: SelectorLcuDataFlowIotProvisioningPackDataStreamElement,
  templateUrl: "./data-stream.component.html",
  styleUrls: ["./data-stream.component.scss"]
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

    // if (this.context) {
    //   if (!this.context.State) {
    //     this.context.State = {};
    //   }
    // }
  }

  //  API Methods
  public Update() {
    this.context.State.SomeProperty = new Date().toString();
  }

  //  Helpers
}
