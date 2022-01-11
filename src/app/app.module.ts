import { NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';


/** primeng */
import { TimelineModule } from 'primeng/timeline';
import { CardModule } from 'primeng/card';
import { SelectButtonModule } from 'primeng/selectbutton';
import { OrganizationChartModule } from 'primeng/organizationchart';
import { BadgeModule } from "primeng/badge";
import { ReseauComponent } from './components/reseau/reseau.component';

import { RadioButtonModule } from 'primeng/radiobutton';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { MessageService } from 'primeng/api';


//components//
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProfilComponent } from './components/profil/profil.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { CalendrierComponent } from './components/calendrier/calendrier.component';
import { Home2Component } from './components/home2/home2.component';







export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, 'assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ProfilComponent,
    ReseauComponent,
    AccueilComponent,
    CalendrierComponent,
    Home2Component,


  ],
  imports: [
    HttpClientModule,
    BrowserModule, BrowserAnimationsModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,



    // primeng
    TimelineModule, CardModule, BadgeModule, SelectButtonModule, OrganizationChartModule,
    RadioButtonModule, AvatarModule,
    AvatarGroupModule,


    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
