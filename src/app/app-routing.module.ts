import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PasswordSelectionComponent } from './password-selection/password-selection.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'password', component: PasswordSelectionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
