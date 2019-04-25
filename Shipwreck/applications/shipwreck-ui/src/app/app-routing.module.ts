import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ShipwreckListComponent} from './components/shipwreck-list/shipwreck-list.component';

const routes: Routes = [
  {
    path: 'shipwreck-list',
    component: ShipwreckListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
