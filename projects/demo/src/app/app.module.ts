import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { environment } from "../environments/environment";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import {
  FathymSharedModule,
  MaterialModule,
  LCUServiceSettings
} from "@lcu/common";
import { HomeComponent } from "./controls/home/home.component";
import { LcuDataFlowIotProvisioningPackModule } from "@napkin-ide/lcu-data-flow-iot-provisioning-pack-common";

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    FlexLayoutModule,
    FathymSharedModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    LcuDataFlowIotProvisioningPackModule
  ],
  providers: [
    {
      provide: LCUServiceSettings,
      useValue: FathymSharedModule.DefaultServiceSettings(environment)
    }
  ],
  bootstrap: [AppComponent],
  exports: [
  ],
  entryComponents: [
  ]
})
export class AppModule {}
