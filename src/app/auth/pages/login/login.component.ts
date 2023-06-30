import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  usuario: string
  pass: string

  constructor(private loginService: LoginService, private router: Router) { }

  logIn() {
    // if( this.usuario === '' && this.pass === '' ) {
    //   alert("Campos vacios")
    //   return
    // }
    console.log(this.usuario, this.pass)
    this.loginService.logIn(this.usuario, this.pass)
    .then(res => {
      console.log(localStorage.getItem("usuario"));
      this.router.navigate(['/itr/inicio']);
    },
    err => alert("Usuario o contraseña incorrectos"))
  }

}
