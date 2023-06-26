import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// ruteo
import { AuthRoutingModule } from './auth-routing.module';
// material
import { MaterialModule } from 'src/app/material/material/material.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule
  ]
})
export class AuthModule { }

