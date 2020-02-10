import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './home/home.component';

import {AboutComponent} from './about/about.component';

import {RestaurantComponent} from './restaurant/restaurant.component';

const routes: Routes = [

  
  {path: 'restaurant', component:RestaurantComponent },
  {path: 'about', component:AboutComponent },
  
  {path: 'home', component:HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
