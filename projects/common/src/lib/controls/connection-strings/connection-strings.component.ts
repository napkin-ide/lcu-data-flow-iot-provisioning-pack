import { Component, OnInit, Input } from '@angular/core';
import { ConnectionStringModel } from '../../models/connection-string.model';
import { LCUElementContext } from '@lcu/common';
import { InfrastructureModel } from '../../models/infrastructure.model';

@Component({
  selector: 'lcu-connection-strings',
  templateUrl: './connection-strings.component.html',
  styleUrls: ['./connection-strings.component.scss']
})
export class ConnectionStringsComponent implements OnInit {

  /**
   * Input property for data
   */
  // tslint:disable-next-line:variable-name
  private _data: InfrastructureModel;
  @Input('data')
  public set Data(val: InfrastructureModel) {

    if (!val) {
      return;
    }

    this._data = val;
    this.connectionStrings();
  }

  public get Data(): InfrastructureModel {
    return this._data;
  }

  /**
   * Input property to allow copying to clipboard
   */
  // tslint:disable-next-line:no-input-rename
  @Input('copy-to-clipboard')
  public CopyToClipboard: boolean;

  /**
   * Connection string title
   */
  // tslint:disable-next-line:no-input-rename
  @Input('title')
  public Title: string;

  /**
   * Array of connections
   */
  public Connections: Array<ConnectionStringModel>;

  /**
   * Property to hold open/close state of panel
   */
  public PanelOpenState: boolean;

  constructor() { }

  ngOnInit() {}

 // Helpers

  /**
   * Copy connection string to clipboard
   *
   * @param idx index of selected connection string
   */
  public CopyStringToClipboard(idx: number): void {
    const selBox = document.createElement('textarea');
    const selected = this.Connections[idx] as ConnectionStringModel;
    selBox.value = selected.Value;

    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }

  /**
   * Get and Show connection strings
   */
  protected connectionStrings(): void {
    this.Connections = [];

    if (!this.Data) {
      return;
    }

    Object.entries(this.Data).forEach((itm: Array<string>) => {
      this.Connections.push(new ConnectionStringModel(itm[0], itm[1]));
    });
  }

}
