import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {HomeModule} from "./home/home.module";
import {HttpClientModule} from "@angular/common/http";
import {ComposersService} from "./api/composers/composers.service";
import { NavbarComponent } from './navbar/navbar.component';
import {NavbarModule} from "./navbar/navbar.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HomeModule,
    NavbarModule,
    HttpClientModule
  ],
  providers: [ComposersService],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
