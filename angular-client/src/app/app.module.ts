import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule} from './app-routing.module';
import { Home } from './home/home.component';
import { Ambition } from './ambition/ambition.component';
import { Economics } from './economics/economics.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {ProjectService} from "./service/project-service.service";
import { Crowdfunding } from './crowdfunding/crowdfunding.component';
import {Disclaimer} from "./disclaimer/disclaimer.component";

@NgModule({
  declarations: [
    AppComponent,
    Home,
    Ambition,
    Economics,
    Crowdfunding,
    Disclaimer
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ProjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
