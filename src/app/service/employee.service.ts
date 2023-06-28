import { Injectable } from '@angular/core';
import axios from 'axios';
import { EmployeeDTO } from '../model/EmployeeDTO';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  url = "http://localhost:8080/api/employee"


  constructor() { }

  public listarEmployees(){
    return axios.get(this.url).then(
      response => {return response.data}
    ).catch(
      err => console.error(err)
    )
  }

  public createEmployee(employee: EmployeeDTO, coachDni: string ){
    return axios.post('http://localhost:8080/api/employee/' + coachDni , employee).then(
      response =>{ return response.data }
    ).catch(
      error => { console.error(error);}
    )
  }
}
