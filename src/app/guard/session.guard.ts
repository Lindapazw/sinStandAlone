import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { LoginService } from '../service/login.service';

@Injectable({providedIn: 'root'})

export class sesionAuth implements CanActivate{

    constructor(private router:Router, private loginService: LoginService){}
    canActivate(route: ActivatedRouteSnapshot): boolean {

        const usuario = localStorage.getItem("usuario");

        if(usuario == null){
            this.router.navigate(['/auth/login']);
            return false;
        }
        return true;
    }

}