import { Component, OnInit } from '@angular/core';
//Importamos el servicio para el login
//ademas de importar, para poder utilizar el metodo Login debemos
//hacer una instancia
import { LoginService } from "../../servicios/login.service";
import { Router } from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // Vamos a crear un objeto vacio que guardará los datos del
  // usuario en el LocalStorage del navegador web.
  usuario = {
    nombre: '',
    email: '',
    password: ''
  }
  //Aqui creamos las instancias de los modulos importados
  constructor(
    private loginService: LoginService,
    private router: Router) { }

  ngOnInit(): void {
  }

  //Creamos la funcion que almacena los datos del usuario para
  //mandarlo al backend y es allí donde ya se crea el usuario.
  //esta funcion la llama desde login.component.html
  logearse(): void {
    //podemos poner un console.log(this.user) para ver por consola
    //si los datos que estamos introduciendo funciona
    //console.log(this.usuario)
    this.loginService.Login(this.usuario).subscribe(
        res => {
          //console.log(res);
          //Vamos a guardar la propiedad que nos devuelve el response desde el servidor node
          //en el localStorage
          //localStorage.setItem('token');
          //redirecciona automaticamente a la pagina privado.
          this.router.navigate(['/privado']);
        },
        err => {
          console.log(err);
        }
      )
  }
}
