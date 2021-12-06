import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProfilComponent } from './components/profil/profil.component';



import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import {TimelineModule} from 'primeng/timeline';
import {CardModule} from 'primeng/card';
import { BadgeModule } from "primeng/badge";





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ProfilComponent,
 
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    TimelineModule,CardModule,BadgeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
