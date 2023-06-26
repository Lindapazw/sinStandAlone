import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Layout
import { LayoutComponent, LoginComponent, RegisterComponent } from '../pages';

// localhost:4200/auth
const routes: Routes = [
  {
    path: '',
    component: LayoutComponent, // mostrando en el app
    children: [
      {path: 'login', component: LoginComponent}, // localhost:4200/auth/login
      {path: 'register', component: RegisterComponent}, // localhost:4200/auth/register
      {path: '**', redirectTo: 'login'} // comodin
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
