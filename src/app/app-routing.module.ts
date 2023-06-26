import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// rutas padres
// localhost:4200/auth
// localhost:4200/main

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth').then(m => m.AuthRoutingModule),
  },
  {
    path: 'itr',
    loadChildren: () => import('./itr').then(m => m.ItrRoutingModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
