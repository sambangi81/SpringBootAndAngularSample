import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ShipwreckListComponent} from './components/shipwreck-list/shipwreck-list.component';
import {ShipwreckCreateComponent} from './components/shipwreck-create/shipwreck-create.component';
import {ShipwreckViewComponent} from './components/shipwreck-view/shipwreck-view.component';
import {AppComponent} from './app.component';
import {ShipwreckEditComponent} from './components/shipwreck-edit/shipwreck-edit.component';
const routes: Routes = [
  {
    path: '',
    component: ShipwreckListComponent
  },
  {
    path: 'shipwreck-list/shipwreck-create',
    component: ShipwreckCreateComponent
  },
  {
    path: 'shipwreck-list/shipwreck-edit',
    component: ShipwreckEditComponent
  },
  {
    path: 'shipwreck-edit',
    component: ShipwreckEditComponent
  },
  {
    path: 'shipwreck-create',
    component: ShipwreckCreateComponent
  },
  {
    path: 'shipwreck-list',
    component: ShipwreckListComponent
  },
  {
    path: 'shipwreck-list/shipwreck-view/:id',
    component: ShipwreckViewComponent
  },
  {
    path: 'shipwreck-list/shipwreck-edit/:id',
    component: ShipwreckEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
