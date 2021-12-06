import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

import { LoginComponent } from './components/login/login.component';
import { ProfilComponent } from './components/profil/profil.component';

const routes: Routes = [
  {path:'home',component:HomeComponent}, 
  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent}, 
  {path:'profil',component:ProfilComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
