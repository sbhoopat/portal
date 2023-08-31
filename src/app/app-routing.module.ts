import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PasswordSelectionComponent } from './password-selection/password-selection.component';
import { MemberDetailsComponent } from './member-details/member-details.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'password', component: PasswordSelectionComponent },
  { path: 'member', component: MemberDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
