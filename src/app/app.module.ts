import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComposersListComponent } from './api/composers/composers-list/composers-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ComposersListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
