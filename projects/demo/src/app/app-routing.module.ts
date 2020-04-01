import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataMapComponent } from './controls/data-map/data-map.component';
import { DataStreamComponent } from './controls/data-stream/data-stream.component';
import { DeviceStreamComponent } from './controls/device-stream/device-stream.component';


const routes: Routes = [
  { path: 'data-stream', component: DataStreamComponent},
  { path: 'data-map', component: DataMapComponent},
  { path: 'device-stream', component: DeviceStreamComponent},
  { path: '', redirectTo: 'data-stream', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
