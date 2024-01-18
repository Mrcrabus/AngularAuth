import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {RouterOutlet} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { AuthComponent } from './pages/auth/auth.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { TooltipComponent } from './components/tooltip/tooltip.component';
import {NgOptimizedImage} from "@angular/common";
import { ButtonComponent } from './components/button/button.component';
import { InputComponent } from './components/input/input.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    NotFoundPageComponent,
    DashboardComponent,
    LoginComponent,
    TooltipComponent,
    ButtonComponent,
    InputComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule, ReactiveFormsModule, RouterOutlet, AppRoutingModule, NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
