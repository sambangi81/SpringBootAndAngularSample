import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import {ShipwreckService} from './services/shipwreck.service';
import { ShipwreckListComponent } from './components/shipwreck-list/shipwreck-list.component';


@NgModule({
  declarations: [
    AppComponent,
    ShipwreckListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ShipwreckService],
  bootstrap: [AppComponent]
})
export class AppModule { }
