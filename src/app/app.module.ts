import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BirthdaypieComponent } from './birthdaypie/birthdaypie.component';

@NgModule({
  declarations: [
    AppComponent,
    BirthdaypieComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
