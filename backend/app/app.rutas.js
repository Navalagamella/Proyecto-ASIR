const express = require('express');
//Importamos el controlador por que vamos a usar las funciones que hemos creado
const todo = require('./app.controlador.js');

//  todo esto está en la documentacion de express, puede variar con la version
// https://expressjs.com/es/4x/api.html express.Router([options])
var router = express.Router();

//creamos las rutas:
//http://expressjs.com/es/api.html#router router.METHOD(path, [callback, ...] callback)

module.exports = (router) => {
  router.post('/privado/tareas/anadir', todo.anadir);
  router.get('/privado/tareas/consulta', todo.obtener);
  //router.post('/privado/tareas/consulta/:nombre', todo.obtener);
};
