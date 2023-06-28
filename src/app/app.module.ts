import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/pages/login/login.component';
import { RegisterComponent } from './auth/pages/register/register.component';
import { LayoutComponent } from './auth/pages/layout/layout.component';
import { LayoutPageComponent } from './itr/pages/layout-page/layout-page.component';
import { InicioComponent } from './itr/pages/inicio/inicio.component';
import { EntrevistadorComponent } from './itr/pages/entrevistador/entrevistador.component';
import { AsignadorComponent } from './itr/pages/asignador/asignador.component';
import { CoachComponent } from './itr/pages/coach/coach.component';
import { RecursoComponent } from './itr/pages/recurso/recurso.component';
import { DepartamentoComponent } from './itr/pages/departamento/departamento.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material/material.module';
// components
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { OportunidadComponent } from './itr';
import { SkillComponent } from './itr/pages/skill/skill.component';
import { PerfilComponent } from './itr/pages/perfil/perfil.component';
import { EmpleadoComponent } from './itr/pages/empleado/empleado.component';
import { TableComponent } from './components/table/table.component';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    LayoutComponent,
    LayoutPageComponent,
    InicioComponent,
    EntrevistadorComponent,
    AsignadorComponent,
    CoachComponent,
    RecursoComponent,
    DepartamentoComponent,
    OportunidadComponent,
    SkillComponent,
    PerfilComponent,
    EmpleadoComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    NavbarComponent,
    DashboardComponent,
    TableComponent,
    FooterComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
