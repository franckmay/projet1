import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { LoginComponent } from './components/login/login.component';
import { ProfilComponent } from './components/profil/profil.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { ReseauComponent } from './components/reseau/reseau.component';
import { CalendrierComponent } from './components/calendrier/calendrier.component';
import { Home2Component } from './components/home2/home2.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  
  {path:'login',component:LoginComponent}, 
  {path:'profil',component:ProfilComponent},
  {path:'home',component:HomeComponent,
  children:[
    // {path:'',component:CalendrierComponent},
    {path:'accueil',component:AccueilComponent},
    {path:'reseau',component:ReseauComponent},
    {path:'calenBudg',component:CalendrierComponent},
    {path:'',component:Home2Component},

    ]}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
