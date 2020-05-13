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
    component: RegistroComponent
  },
  // /publico
  {
    path: 'publico',
    component: PublicoComponent
  },
  // /privado
  {
    path: 'privado',
    component: PrivadoComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
