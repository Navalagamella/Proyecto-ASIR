import { Component, OnInit } from '@angular/core';

//importamos el servicio que hemos creado para la todo list con ng c s
import { TodolistService } from "../../servicios/todolist.service";
//import { TodoObjetoI } from "../../interfaces/todo-objeto";

@Component({
  selector: 'app-anadir',
  templateUrl: './anadir.component.html',
  styleUrls: ['./anadir.component.css']
})
export class AnadirComponent implements OnInit {

  objeto =  {
    _id:'',
    autor: '',
    contenido: '',
    completado: false,
    publico: false,
    grupo_id: sessionStorage.getItem('GRUPO_ID')
  }
  constructor(private todolistService: TodolistService) { }

  ngOnInit(): void {
  }

  //Creamos la funcion que almacena los datos del usuario para
  anadirse() {
    //podemos poner un console.log(this.user) para ver por consola
    //si los datos que estamos introduciendo funciona
    //console.log(this.usuario)
    this.todolistService.anadir(this.objeto)
      .subscribe(
        res => {
          //console.log(this.objeto)
        },
        err => {
          console.log(err);
        }
      )
  }

}
