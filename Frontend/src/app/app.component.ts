import { Component } from '@angular/core';
import { LoginService } from './servicios/login.service';

import { TodolistService } from './servicios/todolist.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public loginService: LoginService, public todolistService: TodolistService) {};
  title = 'frontend';
}
