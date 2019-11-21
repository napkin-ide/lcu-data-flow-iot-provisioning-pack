import { NgModule, DoBootstrap, Injector } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { createCustomElement } from '@angular/elements';
import { FathymSharedModule, LCUServiceSettings, JSONSchema } from '@lcu/common';
import { BrowserModule } from '@angular/platform-browser';
import { LcuDataFlowIotProvisioningPackModule } from '@napkin-ide/lcu-data-flow-iot-provisioning-pack-common';

@NgModule({
  declarations: [],
  imports: [BrowserModule, BrowserAnimationsModule, FathymSharedModule, LcuDataFlowIotProvisioningPackModule.forRoot()],
  exports: [LcuDataFlowIotProvisioningPackModule],
  providers: [
  ]
})
export class AppModule implements DoBootstrap {
  //  Constructors
  constructor(protected injector: Injector) {
  }

  //  Life Cycle
  public ngDoBootstrap() {
  }
}
