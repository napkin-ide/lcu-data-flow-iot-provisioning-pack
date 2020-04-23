import { Component, OnInit, Input } from '@angular/core';
import {
  LcuDataFlowIotProvisioningPackDeviceStreamElementState,
  LcuDataFlowIotProvisioningPackDataStreamElementState
} from '@napkin-ide/lcu-data-flow-iot-provisioning-pack-common';

@Component({
  selector: 'lcu-data-stream',
  templateUrl: './data-stream.component.html',
  styleUrls: ['./data-stream.component.scss']
})
export class DataStreamComponent implements OnInit {
  /**
   * Input property for background image
   */
  // tslint:disable-next-line:no-input-rename
  @Input('background-image')
  public BackgroundImage: string;

  public DataStreamState: LcuDataFlowIotProvisioningPackDataStreamElementState;

  public DeviceStreamState: LcuDataFlowIotProvisioningPackDeviceStreamElementState;

  constructor() {}

  ngOnInit() {
    this.DataStreamState = {
      APIKeys: [
        {
          Name: 'Primary',
          Value: '{test_api_key}'
        },
        {
          Name: 'Secondary',
          Value: '{test_api_key}'
        }
      ],
      Chart: {
        Results: [
          { data: [10, 8, 12, 14, 9, 10, 1], label: 'Success' },
          { data: [0, 0, 1, 0, 0, 2, 0], label: 'Error' }
        ],
        Colors: [
          {
            // dark grey
            backgroundColor: 'rgba(77,83,96,0.2)',
            borderColor: 'rgba(77,83,96,1)',
            pointBackgroundColor: 'rgba(77,83,96,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(77,83,96,1)'
          },
          {
            // red
            backgroundColor: 'rgba(255,0,0,0.3)',
            borderColor: 'red',
            pointBackgroundColor: 'rgba(148,159,177,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(148,159,177,0.8)'
          }
        ],
        Labels: ['1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
        Options: {
          maintainAspectRatio: false,
          responsive: true,
          scales: {
            // We use this empty structure as a placeholder for dynamic theming.
            xAxes: [{}],
            yAxes: [
              {
                id: 'y-axis-0',
                position: 'left'
              }
            ]
          },
          annotation: {
            annotations: [
              {
                type: 'line',
                mode: 'vertical',
                scaleID: 'x-axis-0',
                value: 'March',
                borderColor: 'orange',
                borderWidth: 2,
                label: {
                  enabled: true,
                  fontColor: 'orange',
                  content: 'LineAnno'
                }
              }
            ]
          }
        }
      },
      ActivityLogs: [
        'Activity 1',
        'Activity 2',
        'Activity 3',
        'Activity 1',
        'Activity 2',
        'Activity 3',
        'Activity 1',
        'Activity 2',
        'Activity 3',
        'Activity 1',
        'Activity 2',
        'Activity 3'
      ],
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

    this.DeviceStreamState = {
      Devices: [],
      Chart: {
        Results: [
          { data: [10, 8, 12, 14, 9, 10, 1], label: 'Success' },
          { data: [0, 0, 1, 0, 0, 2, 0], label: 'Error' }
        ],
        Colors: [
          {
            // dark grey
            backgroundColor: 'rgba(77,83,96,0.2)',
            borderColor: 'rgba(77,83,96,1)',
            pointBackgroundColor: 'rgba(77,83,96,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(77,83,96,1)'
          },
          {
            // red
            backgroundColor: 'rgba(255,0,0,0.3)',
            borderColor: 'red',
            pointBackgroundColor: 'rgba(148,159,177,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(148,159,177,0.8)'
          }
        ],
        Labels: ['1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
        Options: {
          maintainAspectRatio: false,
          responsive: true,
          scales: {
            // We use this empty structure as a placeholder for dynamic theming.
            xAxes: [{}],
            yAxes: [
              {
                id: 'y-axis-0',
                position: 'left'
              }
            ]
          },
          annotation: {
            annotations: [
              {
                type: 'line',
                mode: 'vertical',
                scaleID: 'x-axis-0',
                value: 'March',
                borderColor: 'orange',
                borderWidth: 2,
                label: {
                  enabled: true,
                  fontColor: 'orange',
                  content: 'LineAnno'
                }
              }
            ]
          }
        }
      },
      ActivityLogs: [
        'Activity 1',
        'Activity 2',
        'Activity 3',
        'Activity 1',
        'Activity 2',
        'Activity 3',
        'Activity 1',
        'Activity 2',
        'Activity 3',
        'Activity 1',
        'Activity 2',
        'Activity 3'
      ]
    };
  }
}
