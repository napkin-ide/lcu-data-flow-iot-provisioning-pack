import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {
  FathymSharedModule,
  MaterialModule,
  LCUServiceSettings
} from '@lcu/common';
import { LcuDataFlowIotProvisioningPackModule } from '@napkin-ide/lcu-data-flow-iot-provisioning-pack-common';
import { DeviceStreamComponent } from './controls/device-stream/device-stream.component';
import { DataStreamComponent } from './controls/data-stream/data-stream.component';
import { WarmStorageComponent } from './controls/warm-storage/warm-storage.component';
import { DynamicTabTemplatesComponent } from './controls/dynamic-tab-templates/dynamic-tab-templates.component';
import { TestOneComponent } from './controls/dynamic-tab-templates/test-one/test-one.component';
import { TestTwoComponent } from './controls/dynamic-tab-templates/test-two/test-two.component';

@NgModule({
  declarations: [
    AppComponent, 
    DataStreamComponent, 
    DeviceStreamComponent, 
    WarmStorageComponent, 
    DynamicTabTemplatesComponent, 
    TestOneComponent, 
    TestTwoComponent,],
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
  exports: [WarmStorageComponent, DynamicTabTemplatesComponent, TestOneComponent, TestTwoComponent],
  entryComponents: [
    WarmStorageComponent,
    DynamicTabTemplatesComponent,
    TestOneComponent,
    TestTwoComponent]
})
export class AppModule {}
