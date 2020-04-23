import { Component, OnInit } from '@angular/core';
import { LcuDataFlowIotProvisioningPackWarmStorageElementState } from '@napkin-ide/lcu-data-flow-iot-provisioning-pack-common';

@Component({
  selector: 'lcu-warm-storage',
  templateUrl: './warm-storage.component.html',
  styleUrls: ['./warm-storage.component.scss']
})
export class WarmStorageComponent implements OnInit {

  public WarmStorageState: LcuDataFlowIotProvisioningPackWarmStorageElementState;

  constructor() { }

  ngOnInit() {

    this.WarmStorageState = {
      ConnectionStrings: {
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
  }

}
