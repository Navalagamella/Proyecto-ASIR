//Aquí se almacen las rutas que se usaran para guardar los formularios de login
const express = require('express');
//Importamos el controlador por que vamos a usar las funciones que hemos creado
const usuarios = require('./login.controlador.js');

//  todo esto está en la documentacion de express, puede variar con la version
// https://expressjs.com/es/4x/api.html express.Router([options])
var router = express.Router();

//creamos las rutas:
//Ruta para registro y login se realizará por metodo post
//http://expressjs.com/es/api.html#router router.METHOD(path, [callback, ...] callback)
//La funcion flecha es importante por que se obtiene una mejor vista cuando para programar
//un 'con esto haz esto'
module.exports = (router) => {
  //Le indicamos que por el metodo post, en la ruta /registro debe ejecutar la funcion de usuarios llamada crearUsuario
  router.post('/registro', usuarios.crearUsuario);
  router.post('/login', usuarios.loginUsuario);
};
