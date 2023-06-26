import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Layout
import { AsignadorComponent, CoachComponent, DepartamentoComponent, EntrevistadorComponent, InicioComponent, LayoutPageComponent, RecursoComponent, RrhhComponent } from '../pages';

// localhost:4200/itr/asignador
const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      {path:'asignador', component: AsignadorComponent}, // asignador
      {path:'coach', component: CoachComponent}, // coach
      {path:'departamento', component: DepartamentoComponent}, // departamento
      {path:'entrevistador', component: EntrevistadorComponent}, // entrevistador
      {path:'inicio', component: InicioComponent}, // inicio
      {path:'recurso', component: RecursoComponent}, // recurso
      {path:'rrhh', component: RrhhComponent}, // rrhh
      {path:'**', redirectTo:'inicio'}, // inicio
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItrRoutingModule { }
