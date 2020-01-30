import { Component, OnInit, Input } from '@angular/core';
import { ConnectionStringModel } from '../../models/connection-string.model';
import { LCUElementContext } from '@lcu/common';

@Component({
  selector: 'lcu-connection-strings',
  templateUrl: './connection-strings.component.html',
  styleUrls: ['./connection-strings.component.scss']
})
export class ConnectionStringsComponent implements OnInit {

  /**
   * Input property for context
   */
  private _context: LCUElementContext<any>;
  @Input('context')
  public set Context(val: LCUElementContext<any>) {
    debugger;
    this._context = val;
  }

  public get Context(): LCUElementContext<any> {
    return this._context;
  }

  /**
   * Array of connections
   */
  public Connections: Array<ConnectionStringModel>;

  constructor() { }

  ngOnInit() {
  }

 // Helpers

  /**
   * Copy connection string to clipboard
   *
   * @param idx index of selected connection string
   */
  public CopyToClipboard(idx: number): void {
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
  protected connections(): void {
    this.Connections = [];

    Object.entries(this.Context.State.Infrastructure.Connections).forEach((itm: Array<any>) => {
      this.Connections.push(new ConnectionStringModel(itm[0], itm[1]));
    });
  }

}
