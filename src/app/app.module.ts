import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { StonesDashboardComponent } from './stones-dashboard/stones-dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    StonesDashboardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
