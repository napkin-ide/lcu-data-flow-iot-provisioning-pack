import { NgModule, DoBootstrap, Injector } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { createCustomElement } from '@angular/elements';
import { FathymSharedModule } from '@lcu/common';
import { BrowserModule } from '@angular/platform-browser';
import {
  LcuDataFlowIotProvisioningPackModule,
  LcuDataFlowIotProvisioningPackDataStreamElementComponent,
  SelectorLcuDataFlowIotProvisioningPackDataStreamElement,
  LcuDataFlowIotProvisioningPackDeviceStreamElementComponent,
  SelectorLcuDataFlowIotProvisioningPackDeviceStreamElement,
  LcuDataFlowIotProvisioningPackColdStorageElementComponent,
  SelectorLcuDataFlowIotProvisioningPackColdStorageElement,
  SelectorLcuDataFlowIotProvisioningPackHotStorageElement,
  LcuDataFlowIotProvisioningPackHotStorageElementComponent,
  SelectorLcuDataFlowIotProvisioningPackWarmStorageElement,
  LcuDataFlowIotProvisioningPackWarmStorageElementComponent,
  LcuDataFlowIotProvisioningPackDataMapElementComponent,
  SelectorLcuDataFlowIotProvisioningPackDataMapElement
} from '@napkin-ide/lcu-data-flow-iot-provisioning-pack-common';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FathymSharedModule,
    LcuDataFlowIotProvisioningPackModule.forRoot()
  ],
  exports: [LcuDataFlowIotProvisioningPackModule],
  providers: []
})
export class AppModule implements DoBootstrap {
  //  Constructors
  constructor(protected injector: Injector) {}

  //  Life Cycle
  public ngDoBootstrap() {
    const dsMgr = createCustomElement(
      LcuDataFlowIotProvisioningPackDataStreamElementComponent,
      { injector: this.injector }
    );

    customElements.define(
      SelectorLcuDataFlowIotProvisioningPackDataStreamElement,
      dsMgr
    );

    const desMgr = createCustomElement(
      LcuDataFlowIotProvisioningPackDeviceStreamElementComponent,
      { injector: this.injector }
    );

    customElements.define(
      SelectorLcuDataFlowIotProvisioningPackDeviceStreamElement,
      desMgr
    );

    const csMgr = createCustomElement(
      LcuDataFlowIotProvisioningPackColdStorageElementComponent,
      { injector: this.injector }
    );

    customElements.define(
      SelectorLcuDataFlowIotProvisioningPackColdStorageElement,
      csMgr
    );

    const hsMgr = createCustomElement(
      LcuDataFlowIotProvisioningPackHotStorageElementComponent,
      { injector: this.injector }
    );

    customElements.define(
      SelectorLcuDataFlowIotProvisioningPackHotStorageElement,
      hsMgr
    );

    const wsMgr = createCustomElement(
      LcuDataFlowIotProvisioningPackWarmStorageElementComponent,
      { injector: this.injector }
    );

    customElements.define(
      SelectorLcuDataFlowIotProvisioningPackWarmStorageElement,
      wsMgr
    );

    const dmMgr = createCustomElement(
      LcuDataFlowIotProvisioningPackDataMapElementComponent,
      { injector: this.injector }
    );

    customElements.define(
      SelectorLcuDataFlowIotProvisioningPackDataMapElement,
      dmMgr
    );
  }
}
