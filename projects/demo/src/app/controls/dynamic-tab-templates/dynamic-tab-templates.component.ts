import { Component, OnInit, ViewChild } from '@angular/core';
import { TestOneComponent } from './test-one/test-one.component';
import { TestTwoComponent } from './test-two/test-two.component';
import { 
  ConnectionStringsComponent,
  LcuDataFlowIotProvisioningPackWarmStorageElementState, 
  ComponentTabModel} from '@napkin-ide/lcu-data-flow-iot-provisioning-pack-common';
import { ChartsComponent } from '@napkin-ide/lcu-data-flow-iot-provisioning-pack-common/lib/controls/charts/charts.component';

@Component({
  selector: 'lcu-dynamic-tab-templates',
  templateUrl: './dynamic-tab-templates.component.html',
  styleUrls: ['./dynamic-tab-templates.component.scss']
})
export class DynamicTabTemplatesComponent implements OnInit {

  public Components: Array<ComponentTabModel>;

  public WarmStorageState: LcuDataFlowIotProvisioningPackWarmStorageElementState;

  // @ViewChild(ConnectionStringsComponent, {static: false})
  // protected connectionStringComponent: ConnectionStringsComponent;

  constructor() {

    this.Components = [
      new ComponentTabModel({ Component: TestOneComponent, Label: 'Test One' }),
      // new ComponentTabModel({ Component: ChartsComponent,
      //                         Data: this.context.State.Infrastructure.Connections,
      //                         Label: 'Activity Log' }),
      new ComponentTabModel({ Component: ConnectionStringsComponent, 
                              Data: this.warmStorage()['Infrastructure']['Connections'], 
                              Label: 'Connection Strings' })
    ];
  }

  ngOnInit() {
    // if (this.connectionStringComponent) {
    //   this.connectionStringComponent.ConnectionStrings = this.warmStorage();
    // }
  }

  protected warmStorage(): object {
    return {
      Infrastructure: {
        Connections: {
          // tslint:disable-next-line:max-line-length
          'Primary SQL Connection String': 'AccountEndpoint=https://lcu-int.documents.azure.com:443/;AccountKey=Qan4GIhRTovYZmdogrsZnYDR8xiI0RL6gvGa9ufnp3c4RGRit0xAmasqiEOEwqPQs3HoN60w8NyM5E6DbW96yA==;',
          'Secondary SQL Connection String': 'AccountEndpoint=https://lcu-int.documents.azure.com:443/;AccountKey=wBIakKZVZ1f5r4csg5Beu3lYOeoHinMdYtWNVt3gdvQ6jXebdWRALdAC3MHZKv2uEw35hRzM57QoPXGoj8CAcg==;',
          'Primary Read-Only SQL Connection String': 'AccountEndpoint=https://lcu-int.documents.azure.com:443/;AccountKey=6gcv6sCq9k28srWauxeDSBR9Zork7DaWZGcOWU9VdRMzK8WwCtm3gigDMtUzURgkEw0pH0bLoB26joiaYiM72A==;',
          'Secondary Read-Only SQL Connection String': 'AccountEndpoint=https://lcu-int.documents.azure.com:443/;AccountKey=wWW6Eadn8Cgs3QG1TMKajyjV54XkK7TttDyV1HX2SKzBGzAMVef6rKf87uYQQt8KVZpyUug8UTTzsLabqZGbNw==;',
          'Primary Gremlin Connection String': 'AccountEndpoint=https://lcu-int.documents.azure.com:443/;AccountKey=Qan4GIhRTovYZmdogrsZnYDR8xiI0RL6gvGa9ufnp3c4RGRit0xAmasqiEOEwqPQs3HoN60w8NyM5E6DbW96yA==;ApiKind=Gremlin;',
          'Secondary Gremlin Connection String': 'AccountEndpoint=https://lcu-int.documents.azure.com:443/;AccountKey=wBIakKZVZ1f5r4csg5Beu3lYOeoHinMdYtWNVt3gdvQ6jXebdWRALdAC3MHZKv2uEw35hRzM57QoPXGoj8CAcg==;ApiKind=Gremlin;',
          'Primary Read-Only Gremlin Connection String': 'AccountEndpoint=https://lcu-int.documents.azure.com:443/;AccountKey=6gcv6sCq9k28srWauxeDSBR9Zork7DaWZGcOWU9VdRMzK8WwCtm3gigDMtUzURgkEw0pH0bLoB26joiaYiM72A==;ApiKind=Gremlin;',
          'Secondary Read-Only Gremlin Connection String': 'AccountEndpoint=https://lcu-int.documents.azure.com:443/;AccountKey=wWW6Eadn8Cgs3QG1TMKajyjV54XkK7TttDyV1HX2SKzBGzAMVef6rKf87uYQQt8KVZpyUug8UTTzsLabqZGbNw==;ApiKind=Gremlin;'
        }
      }
    };
  }

}
