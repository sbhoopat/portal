import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MemberDetailsComponent } from './member-details/member-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PasswordSelectionComponent } from './password-selection/password-selection.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MemberDetailsComponent,
    PasswordSelectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
