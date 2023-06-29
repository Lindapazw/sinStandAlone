import { Injectable } from '@angular/core';
import axios from 'axios';
import { ResourceDTO } from '../model/ResourceDTO';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {
  url = 'http://localhost:8080/api/resource';
  constructor() { }

  listarResourceBusiness(): Promise<ResourceDTO[]> {
    return axios.get(this.url).then(
      response => response.data
    ).catch(
      error => {
        console.error(error);
        return [];
      }
    );
  }

  public deleteResourceBusiness(name: String){
    return axios.delete(this.url +"/delete/"+name)
    .then(response =>{ return response.data }
    ).catch(
      error => { console.error(error);}
    )
  }

  editResourceBusiness(name: String): Promise<ResourceDTO[]> {
    return axios.put(this.url+ "/update/" + name).then(
      response => response.data
    ).catch(
      error => {
        console.error(error);
        return [];
      }
    );
  }

}
