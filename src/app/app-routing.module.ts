import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { LoginComponent } from './components/login/login.component';
import { ProfilComponent } from './components/profil/profil.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { ReseauComponent } from './components/reseau/reseau.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  
  {path:'login',component:LoginComponent}, 
  {path:'profil',component:ProfilComponent},
  {path:'home',component:HomeComponent,
  children:[
    {path:'',component:AccueilComponent},
    {path:'accueil',component:AccueilComponent},
    {path:'reseau',component:ReseauComponent},

    ]}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
