import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// angular material
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule


  ],s
  exports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
})

export class MaterialModule { }
