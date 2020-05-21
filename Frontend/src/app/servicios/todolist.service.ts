import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators';
import { Observable } from "rxjs";
import { TodoObjetoI } from '../interfaces/todo-objeto';

@Injectable({
  providedIn: 'root'
})

export class TodolistService {

  private URL = 'http://localhost:3000/privado/tareas/consulta'

  constructor(private http: HttpClient) {}

  consultar() {
    return this.http.get(this.URL);
 

  }
}