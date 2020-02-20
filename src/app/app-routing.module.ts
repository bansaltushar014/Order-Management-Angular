import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {LoginComponent} from './login/login.component';

import {AddOrderComponent} from './addorder/addorder.component';

import {ViewOrderComponent} from './vieworder/vieworder.component';

const routes: Routes = [

  
  {path: 'restaurant', component:ViewOrderComponent },
  {path: 'about', component:AddOrderComponent },
  
  {path: 'home', component:LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
