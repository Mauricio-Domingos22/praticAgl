import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { AbutComponent } from './components/pages/abut/abut.component';
import { HomeComponent } from './components/pages/home/home.component';
import { NewMomentComponent } from './components/pages/new-moment/new-moment.component';
import { MomentComponent } from './components/pages/moment/moment.component';
import { EdiMomentComponent } from './components/pages/edi-moment/edi-moment.component';

const routes: Routes = [
  {path:'', component:HomeComponent}, 
  {path:'about', component:AbutComponent},
  {path:'moment/new', component:NewMomentComponent},
  {path:'moment/edit/:id', component:EdiMomentComponent},
  {path:'moment/:id', component:MomentComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
