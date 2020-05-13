import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './servicios/login.service';
import { Router } from '@angular/router';

// Este archivo se ha generado con ng g g autorizacion
  //El canActivate es la forma en la que nosotros podemos determinar
  //la forma de la que el usuario puede acceder a la página

@Injectable({

  providedIn: 'root'
})

export class AutorizacionGuard implements CanActivate {

  constructor(private loginService: LoginService,
              private router: Router) {}

  canActivate(): boolean {
    //si la funcion mantenidoLogueado de la instancia loginService
    //devuelve true, esta funcion devolverá true a CanActivate
    if (this.loginService.mantenidoLogueado()) {
      return true;
    }
    //Esta funcion lo que hara será que si despues de comprobar que tenemos un token
    //no lo tuvieramos, nos mandaría a la ruta de registro para poder obtener uno.
    this.router.navigate(['/registro']);
    return false;
  }


}
