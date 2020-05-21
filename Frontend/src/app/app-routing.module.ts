import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Importacion de los componentes que hemos creado con
// ng g c
//los nombres estan en sus respectivos archivos .component.ts
//se pueden cambiar, pero mejor utilizar los que ha creado angular
import { LoginComponent } from "./componentes/login/login.component";
import { RegistroComponent } from "./componentes/registro/registro.component";
import { PublicoComponent } from "./componentes/publico/publico.component";
import { PrivadoComponent } from "./componentes/privado/privado.component";
import { TodolistComponent } from "./componentes/todolist/todolist.component";
import { MistodolistComponent } from "./componentes/mistodolist/mistodolist.component";
//Importamos el guard para proteger la ruta /privado
import { AutorizacionGuard } from './autorizacion.guard';

//creamos los objetos para los componentes que hemos importado
const routes: Routes = [

  // / ruta raiz
  {
    path: '',
    redirectTo: '/publico',
    // pathMatch ayuda para poder redireccionar
    pathMatch: 'full'
  },
  // /login
  {
    //Cuando cargue la ruta /login
    path: 'login',
    //Renderiza el componente LoginComponent
    component: LoginComponent,
    pathMatch: 'full'
  },
  // /registro
  {
    path: 'registro',
    component: RegistroComponent,
    pathMatch: 'full'
  },
  // /publico
  {
    path: 'publico',
    component: PublicoComponent
  },
  // /privado
  // establecemos que esta ruta deberá ser privada y solo accesible
  // a todos aquellos que esten logueados (que tengan un token)
  {
    path: 'privado',
    component: PrivadoComponent,
    pathMatch: 'full',
    canActivate: [AutorizacionGuard]
  },
  // /privado/consultar
  {
    path: 'privado/consulta',
    component: TodolistComponent,
    canActivate: [AutorizacionGuard]
  },
    // /privado/consulta/usuario
  {
    path: 'privado/consulta/:grupo_id',
      component: MistodolistComponent,
      canActivate: [AutorizacionGuard]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
