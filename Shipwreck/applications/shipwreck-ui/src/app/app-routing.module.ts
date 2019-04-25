import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ShipwreckListComponent} from './components/shipwreck-list/shipwreck-list.component';
import {ShipwreckCreateComponent} from './components/shipwreck-create/shipwreck-create.component';

const routes: Routes = [
  {
    path: '',
    component: ShipwreckListComponent
  },
  {
    path: 'shipwreck-list',
    component: ShipwreckListComponent
  },
  {
    path: 'shipwreck-create',
    component: ShipwreckCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
