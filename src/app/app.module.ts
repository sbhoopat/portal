import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterModule, Routes }   from '@angular/router';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTooltipModule } from '@angular/material/tooltip';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MemberDetailsComponent } from './member-details/member-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PasswordSelectionComponent } from './password-selection/password-selection.component';
import {RequestComponent} from './requests/request.component';
import { UserComponent } from './user/user.component';
import { CompanySettingsComponent } from './company-settings/company-settings.component';
import { CommonService } from './services/common-service';
import { HttpClientModule } from '@angular/common/http';
@NgModule({ 
  declarations: [
    AppComponent,
    LoginComponent,
    MemberDetailsComponent,
    PasswordSelectionComponent,
    RequestComponent,
    UserComponent,
    CompanySettingsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatSidenavModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    RouterModule,
    MatExpansionModule,
    MatTooltipModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
