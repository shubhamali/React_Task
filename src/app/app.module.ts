import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { Ng9PasswordStrengthBarModule } from 'ng9-password-strength-bar'
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    Ng9PasswordStrengthBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
