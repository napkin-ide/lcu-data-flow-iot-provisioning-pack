import { NgModule, ModuleWithProviders } from '@angular/core';
import { LcuDataFlowIotProvisioningPackDataStreamElementComponent } from './elements/data-stream/data-stream.component';
import { LcuDataFlowIotProvisioningPackDeviceStreamElementComponent } from './elements/device-stream/device-stream.component';
import { LcuDataFlowIotProvisioningPackColdStorageElementComponent } from './elements/cold-storage/cold-storage.component';
import { LcuDataFlowIotProvisioningPackWarmStorageElementComponent } from './elements/warm-storage/warm-storage.component';
import { LcuDataFlowIotProvisioningPackDataMapElementComponent } from './elements/data-map/data-map.component';
import { LcuDataFlowIotProvisioningPackHotStorageElementComponent } from './elements/hot-storage/hot-storage.component';
import { FathymSharedModule, MaterialModule } from '@lcu/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { LcuDataFlowIotProvisioningPackDataEmulatorElementComponent } from './elements/data-emulator/data-emulator.component';
import { LcuDataFlowIotProvisioningPackWarmQueryElementComponent } from './elements/warm-query/warm-query.component';
import { ConnectionStringsComponent } from './controls/connection-strings/connection-strings.component';
import { DynamicTabsComponent } from './controls/dynamic-tabs/dynamic-tabs.component';
import { ChartsComponent } from './controls/charts/charts.component';

@NgModule({
  declarations: [
    LcuDataFlowIotProvisioningPackDataStreamElementComponent,
    LcuDataFlowIotProvisioningPackDeviceStreamElementComponent,
    LcuDataFlowIotProvisioningPackColdStorageElementComponent,
    LcuDataFlowIotProvisioningPackWarmStorageElementComponent,
    LcuDataFlowIotProvisioningPackDataMapElementComponent,
    LcuDataFlowIotProvisioningPackHotStorageElementComponent,
    LcuDataFlowIotProvisioningPackDataEmulatorElementComponent,
    LcuDataFlowIotProvisioningPackWarmQueryElementComponent,
    ConnectionStringsComponent,
    DynamicTabsComponent,
    ChartsComponent
  ],
  entryComponents: [
    LcuDataFlowIotProvisioningPackDataStreamElementComponent,
    LcuDataFlowIotProvisioningPackDeviceStreamElementComponent,
    LcuDataFlowIotProvisioningPackColdStorageElementComponent,
    LcuDataFlowIotProvisioningPackWarmStorageElementComponent,
    LcuDataFlowIotProvisioningPackDataMapElementComponent,
    LcuDataFlowIotProvisioningPackHotStorageElementComponent,
    LcuDataFlowIotProvisioningPackDataEmulatorElementComponent,
    LcuDataFlowIotProvisioningPackWarmQueryElementComponent,
    ConnectionStringsComponent,
    DynamicTabsComponent,
    ChartsComponent
  ],
  exports: [
    LcuDataFlowIotProvisioningPackDataStreamElementComponent,
    LcuDataFlowIotProvisioningPackDeviceStreamElementComponent,
    LcuDataFlowIotProvisioningPackColdStorageElementComponent,
    LcuDataFlowIotProvisioningPackWarmStorageElementComponent,
    LcuDataFlowIotProvisioningPackDataMapElementComponent,
    LcuDataFlowIotProvisioningPackHotStorageElementComponent,
    LcuDataFlowIotProvisioningPackDataEmulatorElementComponent,
    LcuDataFlowIotProvisioningPackWarmQueryElementComponent,
    ConnectionStringsComponent,
    DynamicTabsComponent,
    ChartsComponent
  ],
  imports: [
    FathymSharedModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule,
    ChartsModule
  ]
})
export class LcuDataFlowIotProvisioningPackModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: LcuDataFlowIotProvisioningPackModule,
      providers: []
    };
  }
}
