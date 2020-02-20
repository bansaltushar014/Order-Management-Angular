import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ViewOrderComponent } from './vieworder/vieworder.component';
import { AddOrderComponent } from './addorder/addorder.component';
import { HomeLinkComponent } from './navigation/homeLink/homeLink.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FormsModule }   from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ViewOrderComponent,
    AddOrderComponent,
    HomeLinkComponent,
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
