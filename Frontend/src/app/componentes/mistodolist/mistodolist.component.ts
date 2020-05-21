import { Component, OnInit } from '@angular/core';
//importamos el servicio que hemos creado para la todo list con ng c s
import { TodolistService } from "../../servicios/todolist.service";
//import { TodoObjetoI } from "../../interfaces/todo-objeto";

@Component({
  selector: 'app-mistodolist',
  templateUrl: './mistodolist.component.html',
  styleUrls: ['./mistodolist.component.css']
})
export class MistodolistComponent implements OnInit {

  public TodoObjeto:any = [];

  constructor( private todolistService: TodolistService) {this.obtenerObjetos();}

  ngOnInit(): void {
  }

  obtenerObjetos(){
    this.todolistService.consultarSolo().subscribe((data) => {
      this.TodoObjeto = data;
      console.log(this.TodoObjeto);
    } )
  }

}
