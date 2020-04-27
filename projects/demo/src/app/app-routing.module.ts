import { WarmStorageComponent } from './controls/warm-storage/warm-storage.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataStreamComponent } from './controls/data-stream/data-stream.component';
import { DeviceStreamComponent } from './controls/device-stream/device-stream.component';
import { DynamicTabTemplatesComponent } from './controls/dynamic-tab-templates/dynamic-tab-templates.component';


const routes: Routes = [
  { path: 'data-stream', component: DataStreamComponent},
  { path: 'device-stream', component: DeviceStreamComponent},
  { path: 'warm-storage', component: WarmStorageComponent },
  { path: 'dynamic-templates', component: DynamicTabTemplatesComponent },
  { path: '', redirectTo: 'data-stream', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
