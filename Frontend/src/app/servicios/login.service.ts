import { Injectable } from '@angular/core';
//Debemos imporatar el servicio en el componente que vayamos a utilizarlo
//login.service es importado desde login.component.ts
import { HttpClient } from '@angular/common/http';

import { Router } from '@angular/router';

//importar observables
import { UsuariosI} from '../interfaces/usuarios';
import { JwtRespuestaI } from '../interfaces/jwt-respuesta';
import { tap } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private token: string;

  //Indicamos la ruta de nuestro servidor de node
  private URL = 'http://localhost:3000/'

  constructor(private http: HttpClient, private router: Router) { }

  //Funcion que guarda los datos de usuario y envia al backend
  //Lo que hace es: a la URL especificada antes, le añade a la ruta login
  //y coge los parametros del usuario
  //añadir un return ayuda a convertir esto a un objeto observable
  //a un objeto que sus datos puedan ser manipulados.
  Login(usuario: UsuariosI): Observable<JwtRespuestaI> {
    return this.http.post<JwtRespuestaI>(this.URL + 'login',
      usuario).pipe(tap(
        (res: JwtRespuestaI) => {
          if (res) {
            // guardar token
            this.guardarToken(res.datosUsuario.accessToken, res.datosUsuario.expiresIn);
          }
        })
      );
  }

  //En el Backend hemos indicado que se responda con los datos de usuario
  //con estas dos funciones cogemos esta respuesta para guardar solamente
  //el token que mantendrá la sesion iniciada.

  Registro(usuario: UsuariosI): Observable<JwtRespuestaI> {
    return this.http.post<JwtRespuestaI>(this.URL + 'registro',
      usuario).pipe(tap(
        (res: JwtRespuestaI) => {
          if (res) {
            // guardar token
            this.guardarToken(res.datosUsuario.accessToken, res.datosUsuario.expiresIn);
          }
        })
      );
  }

  //Comprobar que el usuario esta logueado
  //esto se comprueba simplemente si tiene un token en el sessionStorage
  //esto es importado en autorizacion.guard
  mantenidoLogueado() {
    if (sessionStorage.getItem('ACCESS_TOKEN')) { return true }
  }

  //Desconectar al usuario
  //Lo que hacemos es quitarle el token de la sessionStorage
  desconexion() {
    sessionStorage.removeItem('ACCESS_TOKEN');
    sessionStorage.removeItem('EXPIRES_IN');
    this.router.navigate(['/login']);
  }

  private guardarToken(token: string, expiresIn: string): void {
   sessionStorage.setItem("ACCESS_TOKEN", token);
   sessionStorage.setItem("EXPIRES_IN", expiresIn);
   this.token = token;
    }

  private getToken() {
   if (!this.token) {this.token = sessionStorage.getItem("ACCESS_TOKEN");}
   }
}
