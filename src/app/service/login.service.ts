import { Injectable } from '@angular/core';
import axios from 'axios';
import { UserDTO } from '../model/UserDTO';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  user: UserDTO

  constructor() { }

  logIn(usuario: string, pass: string) {
    this.user = {
      usuario: usuario,
      pass: pass
    }
    return axios.post('http://localhost:8080/api/user', this.user)
    .then(res => {
      if(res.status == 200)
        localStorage.setItem("usuario", res.data);
      return {status : res.status,
        data:res.data}

      }
  )
  }

  logOut(): void {
    localStorage.removeItem("usuario");
  }

}
