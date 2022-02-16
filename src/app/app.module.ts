import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserSignupComponent } from './modules/user-signup/user-signup.component';
import { UserLoginComponent } from './modules/user-login/user-login.component';

@NgModule({
  declarations: [
    AppComponent,
    UserSignupComponent,
    UserLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
