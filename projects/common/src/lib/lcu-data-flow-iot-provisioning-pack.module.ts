import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LcuDataFlowIotProvisioningPackDataStreamElementComponent } from './elements/data-stream/data-stream.component';

@NgModule({
  declarations: [
    LcuDataFlowIotProvisioningPackDataStreamElementComponent
  ],
  entryComponents: [
    LcuDataFlowIotProvisioningPackDataStreamElementComponent
  ],
  exports: [
    LcuDataFlowIotProvisioningPackDataStreamElementComponent
  ],
  imports: [CommonModule]
})
export class LcuDataFlowIotProvisioningPackModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: LcuDataFlowIotProvisioningPackModule,
      providers: [
      ]
    };
  }
}
