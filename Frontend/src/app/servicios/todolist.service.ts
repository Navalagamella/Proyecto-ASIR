import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { TodoObjetoI } from '../interfaces/todo-objeto';
import { TodoRespuestaI } from '../interfaces/todo-respuesta';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class TodolistService {
  
  private miGrupo_id = sessionStorage.getItem("GRUPO_ID")

  private URL = 'http://localhost:3000/privado/tareas/'

  private URL2 = 'http://localhost:3000/privado/tareas/consulta'

  constructor(private http: HttpClient) {}

  consultar() {
    return this.http.get(this.URL2 + 'r/' + this.miGrupo_id)
  }

  consultarSolo() {
    return this.http.get(this.URL2 + '/' + this.miGrupo_id )
  }

  anadir(objeto:TodoObjetoI): Observable<any>{
    return this.http.post(this.URL + 'anadir', objeto)
      .pipe(tap(
        //Si hay respuesta, se guarda en TodoRespuestaI
        (res: TodoRespuestaI) => {
        //y realiza algo si hay respuesta
          if (res) {
            console.log(objeto);
          }
        })
      );
  }

}