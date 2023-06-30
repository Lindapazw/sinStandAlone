import { Injectable } from '@angular/core';
import axios from 'axios';
import { OportunidadDTO } from '../model/OportunidadDTO';

@Injectable({
  providedIn: 'root'
})
export class OportunidadService {

  constructor() { }

  url = "http://localhost:8080/api/opportunity"


  // listar oportunidades
  public listOpportunity(){
    return axios.get(this.url).then(
      response => { return response.data }
    ).catch(
      error => { console.error(error); }
    )
  }

  // añadir oportunidad
  public addOpportunity(opportunity: OportunidadDTO){
    return axios.post(this.url + '/create', opportunity).then(
      response => { return response.data }
    ).catch(
      error => { console.error(error); }
    )
  }



}
