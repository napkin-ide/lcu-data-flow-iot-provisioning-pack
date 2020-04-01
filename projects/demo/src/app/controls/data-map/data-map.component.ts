import { Component, OnInit, Input } from '@angular/core';
import { LcuDataFlowIotProvisioningPackDataMapElementState } from '@napkin-ide/lcu-data-flow-iot-provisioning-pack-common';

@Component({
  selector: 'lcu-data-map',
  templateUrl: './data-map.component.html',
  styleUrls: ['./data-map.component.scss']
})
export class DataMapComponent implements OnInit {
  /**
   * Input property for background image
   */
  // tslint:disable-next-line:no-input-rename
  @Input('background-image')
  public BackgroundImage: string;

  public DataMapState: LcuDataFlowIotProvisioningPackDataMapElementState;

  constructor() {}

  ngOnInit() {
    this.DataMapState = {
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
