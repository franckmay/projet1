import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {TimelineModule} from 'primeng/timeline';import {CardModule} from 'primeng/card';
import { LoginComponent } from './components/login/login.component';
import { ProfilComponent } from './components/profil/profil.component';
import { CalendrierComponent } from './components/calendrier/calendrier.component';
import { Timeline2Component } from './components/timeline2/timeline2.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ProfilComponent,
    CalendrierComponent,
    Timeline2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,TimelineModule,CardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
