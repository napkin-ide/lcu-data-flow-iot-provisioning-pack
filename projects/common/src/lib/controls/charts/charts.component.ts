import { LCUChart } from './../../models/chart';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lcu-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {

  /**
   * Input property for data
   */
  // tslint:disable-next-line:variable-name
  private _data: LCUChart;
  @Input('data')
  public set Data(val: LCUChart) {

    if (!val) {
      return;
    }

    this._data = val;
  }

  public get Data(): LCUChart {
    return this._data;
  }

  constructor() { }

  ngOnInit() {
  }

}
