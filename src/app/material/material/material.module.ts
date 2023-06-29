import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Angular material
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import {MatProgressBarModule} from '@angular/material/progress-bar';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatIconModule,
    MatProgressBarModule
  ],
  exports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatIconModule,
    MatProgressBarModule
  ],
})

export class MaterialModule { }
