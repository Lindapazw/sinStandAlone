import { EmployeeDTO } from './../../model/EmployeeDTO';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/service/employee.service';
import { FormsModule } from '@angular/forms';
import { SharedService } from 'src/app/service/shared.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-form-employee',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './form-employee.component.html',
  styleUrls: ['./form-employee.component.css'],
})
export class FormEmployeeComponent {
  title = 'Agregar empleado';
  @Input() employee: EmployeeDTO = {
    name: '',
    lastName: '',
    dni: '',
    shortGoal: '',
    longGoal: '',
  };
  coachDni: string = '';
  //flag
  nuevo = false;

  constructor(
    private miServicio: EmployeeService,
    private router: Router,
    private shared: SharedService,
    private dialog: MatDialog
  ) {}
  ngOnInit(): void {
    //
    if (this.employee.name == '') this.nuevo = true;
  }

  createEmployee() {
    if (this.nuevo) {
      this.miServicio
        .createEmployee(this.employee, this.coachDni)
        .then((response) => {
          console.log(response);
          this.shared.submit(true);
        })
        .catch((error) => console.log(error));
    } else {
      this.miServicio
        .updateEmployee(this.employee)
        .then((response) => {
          console.log(response);
          this.shared.submit(true);
        })
        .catch((error) => console.log(error));
    }
  }

  //cerrar dialog
  closeDialog(): void {
    this.dialog.closeAll();
  }
}
