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
}
