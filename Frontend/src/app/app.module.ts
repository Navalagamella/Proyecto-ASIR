import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//la comunicacion con el backend se realizará a traves
//de un modulo que se llama http
//https://angular.io/guide/http
import { HttpClientModule } from '@angular/common/http';

//Importamos las rutas de los archivos que hemos creado con ng generate componet
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { PublicoComponent } from './componentes/publico/publico.component';
import { PrivadoComponent } from './componentes/privado/privado.component';

//Importamos los modulos necesarios para la aplicacion
import { FormsModule } from "@angular/forms";

//Importamos el guard para proteger la ruta /privado
import { AutorizacionGuard } from './autorizacion.guard';
import { TodolistComponent } from './componentes/todolist/todolist.component';
import { MistodolistComponent } from './componentes/mistodolist/mistodolist.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    PublicoComponent,
    PrivadoComponent,
    TodolistComponent,
    MistodolistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ AutorizacionGuard ],
  bootstrap: [AppComponent]
})
export class AppModule { }
