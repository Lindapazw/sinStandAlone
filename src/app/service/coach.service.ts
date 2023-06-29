import { Injectable } from '@angular/core';
import { CoachDTO } from '../model/CoachDTO';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class CoachService {

  constructor() { }

  url = "http://localhost:8080/api/coach";

  public listCoaches() {
    return axios.get(this.url).then(
      response => { return response.data }
    ).catch(
      error => { console.error(error); }
    )
  }

}
