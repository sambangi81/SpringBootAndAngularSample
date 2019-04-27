import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {ShipwreckService} from './services/shipwreck.service';
import { ShipwreckListComponent } from './components/shipwreck-list/shipwreck-list.component';
import { ShipwreckCreateComponent } from './components/shipwreck-create/shipwreck-create.component';
import { ShipwreckViewComponent } from './components/shipwreck-view/shipwreck-view.component';
import { ShipwreckEditComponent } from './components/shipwreck-edit/shipwreck-edit.component';
import { ShipwreckCreateEditComponent } from './components/shipwreck-create-edit/shipwreck-create-edit.component';



@NgModule({
  declarations: [
    AppComponent,
    ShipwreckListComponent,
    ShipwreckCreateComponent,
    ShipwreckViewComponent,
    ShipwreckEditComponent,
    ShipwreckCreateEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ShipwreckService],
  bootstrap: [AppComponent]
})
export class AppModule { }
