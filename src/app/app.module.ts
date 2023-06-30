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

import { OportunidadComponent } from './itr';
import { SkillComponent } from './itr/pages/skill/skill.component';
import { PerfilComponent } from './itr/pages/perfil/perfil.component';
import { EmpleadoComponent } from './itr/pages/empleado/empleado.component';
import { TableComponent } from './components/table/table.component';
import { FooterComponent } from './components/footer/footer.component';
import { PopupComponent } from './components/popup/popup.component';
import { MatDialog } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';
import { CardsComponent } from "./components/cards/cards.component";
import { CoachTableComponent } from "./components/coach-table/coach-table.component";
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';




@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        RegisterComponent,
        LayoutComponent,
        LayoutPageComponent,
        EntrevistadorComponent,
        AsignadorComponent,
        CoachComponent,
        RecursoComponent,
        DepartamentoComponent,
        OportunidadComponent,
        SkillComponent,
        PerfilComponent,
        EmpleadoComponent,
        InicioComponent
    ],
    providers: [MatDialog],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MaterialModule,
        TableComponent,
        FooterComponent,
        PopupComponent,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatListModule,
        MatIconModule,
        CommonModule,
        RouterLink,
        TableComponent,
        FooterComponent,
        CardsComponent,
        CoachTableComponent,
        MatProgressSpinnerModule,
    ]
})
export class AppModule {}
