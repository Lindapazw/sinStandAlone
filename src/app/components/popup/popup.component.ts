import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormEmployeeComponent } from '../form-employee/form-employee.component';
import { EmployeeDTO } from 'src/app/model/EmployeeDTO';

@Component({
  selector: 'app-popup',
  standalone: true,
  imports: [CommonModule, MatDialogModule, FormEmployeeComponent],
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css'],
})
export class PopupComponent {
  employee: EmployeeDTO = {
    name: '',
    lastName: '',
    dni: '',
    longGoal: '',
    shortGoal: '',
  };

  constructor(@Inject(MAT_DIALOG_DATA) public data: EmployeeDTO) {
    console.log(data);

    this.employee = this.data;
  }
}
