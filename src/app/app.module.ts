import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { RestaurantComponent } from './restaurant/restaurant.component';
import { AboutComponent } from './about/about.component';


import { NavbarComponent } from './navigation/navbar/navbar.component';

import { RouterModule } from '@angular/router';


import {HttpClientModule} from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FormsModule }   from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,

    RestaurantComponent,
    AboutComponent,
    
    
    NavbarComponent,
    
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    NgbModule
  ],
  
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
