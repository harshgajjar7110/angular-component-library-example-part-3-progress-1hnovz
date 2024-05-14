import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

import { AlertModule, ProgressBarModule } from './library/components';

import { AccountInfoComponent } from './pages/account-info.component';
import { DashboardComponent } from './pages/dashboard.component';
import { HomeComponent } from './pages/home.component';

@NgModule({
  imports:      [ AppRoutingModule, BrowserModule, BrowserAnimationsModule, FormsModule, CoreModule, SharedModule, AlertModule, ProgressBarModule ],
  declarations: [ AppComponent, HomeComponent, DashboardComponent, AccountInfoComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
