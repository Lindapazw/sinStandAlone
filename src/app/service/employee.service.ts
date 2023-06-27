import { Injectable } from '@angular/core';
import axios from 'axios';

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

}
