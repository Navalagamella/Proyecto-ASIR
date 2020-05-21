import { Component, OnInit } from '@angular/core';

//importamos el servicio que hemos creado para la todo list con ng c s
import { TodolistService } from "../../servicios/todolist.service";
//import { TodoObjetoI } from "../../interfaces/todo-objeto";

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  public TodoObjeto:any = [];
  constructor( private todolistService: TodolistService) {this.obtenerObjetos();}

  ngOnInit() { }

  obtenerObjetos(){
    this.todolistService.consultar().subscribe((data) => {
      this.TodoObjeto = data;
      console.log(this.TodoObjeto);
    } )
  }

}
