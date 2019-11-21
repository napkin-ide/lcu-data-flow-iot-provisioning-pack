import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [],
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
