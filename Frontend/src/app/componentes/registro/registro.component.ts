import { Component, OnInit } from '@angular/core';
import { LoginService } from "../../servicios/login.service";

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  // Vamos a crear un objeto vacio que guardará los datos del
  // usuario en el LocalStorage del navegador web.
  usuario = {
    nombre: '',
    email: '',
    password: '',
    accessToken: ''
  }

  constructor(private LoginService: LoginService) { }

  ngOnInit(): void {
  }

  //Creamos la funcion que almacena los datos del usuario para
  //mandarlo al backend y es allí donde ya se crea el usuario.
  //esta funcion la llama desde login.component.html
  registrarse() {
    //podemos poner un console.log(this.user) para ver por consola
    //si los datos que estamos introduciendo funciona
    this.LoginService.Registro(this.usuario)
      .subscribe(
          res => {
            console.log(res)
          },
          err => console.log(err)
      )
  }

}
