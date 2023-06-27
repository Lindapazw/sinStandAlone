import { EmployeeDTO } from './../../model/EmployeeDTO';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/service/employee.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-employee',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './form-employee.component.html',
  styleUrls: ['./form-employee.component.css']
})
export class FormEmployeeComponent {
  title = 'Agregar empleado';
  employee: EmployeeDTO = {name: '', lastName: '', dni: '', shortGoal: '', longGoal: '' };
  coachDni: string = '';

  constructor(private miServicio: EmployeeService, private router:Router){
    
  }
  ngOnInit(): void {
    
  }  

  createEmployee(){
    this.miServicio.createEmployee(this.employee, this.coachDni).then(
      response => {console.log(response)
      this.router.navigate(['/itr/inicio'])}).catch(error => console.log(error))     
  }

  reloadDashboard(){
    
  }
}
