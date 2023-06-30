import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { sesionAuth } from './guard/session.guard';

// rutas padres
// localhost:4200/auth
// localhost:4200/itr
// localhost:4200

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth').then(m => m.AuthRoutingModule),
  },
  {
    path: 'itr',
    loadChildren: () => import('./itr').then(m => m.ItrRoutingModule),
    canActivate: [sesionAuth]
  },
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
