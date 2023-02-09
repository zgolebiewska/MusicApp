import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from "./home.component";
import {ComposersService} from "../api/composers/composers.service";
import {AppModule} from "../app.module";
import {NavbarModule} from "../shared/navbar/navbar.module";



@NgModule({
  declarations: [
    HomeComponent
  ],
  exports: [
    HomeComponent
  ],
  providers: [ComposersService],
  imports: [
    CommonModule,
    NavbarModule
  ],
  bootstrap: [HomeComponent]
})
export class HomeModule { }
