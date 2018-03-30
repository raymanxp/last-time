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
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './app.effects';

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
    HttpClientModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([AppEffects])
  ],
  providers: [AlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
