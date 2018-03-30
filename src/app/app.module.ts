import { AlertService } from './app-alert/alert.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ClarityModule } from '@clr/angular';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppAlertComponent } from './app-alert/app-alert.component';
import { AddEntryComponent } from './feature/add-entry/add-entry.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AppAlertComponent,
    AddEntryComponent,
  ],
  imports: [
    BrowserModule,
    ClarityModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
