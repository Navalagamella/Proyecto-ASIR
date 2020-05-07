//Este archivo contiene las funciones y la exportacion de esquema a modelo.
//se ha separado de login.controlador.js para que quede separado.
//Importamos mongoose
const mongoose = require('mongoose');
//Importamos el esquema
const loginUsuarios_Esquema = require('./login.modelo.js');
//Añadimos dos funciones estaticas a nuestro modelo que seran para el registro y login
//Aunque se las añadamos al modelo, hay que añadirlas al esquema.
//https://mongoosejs.com/docs/guide.html#statics
//Segun la documentacion aqui no podemos utilizar funciones de flecha

//creamos los metodos de registro y login
 loginUsuarios_Esquema.statics = {
   crear: function (data, cb) {
     const usuario = new this(data)
     usuario.save(cb);
   },
   login: function (query, cb) {
     this.find(query, cb);
   }
 };

 //Asociamos el esquema a un modelo
 //https://mongoosejs.com/docs/api.html#mongoose_Mongoose-Model
 //https://mongoosejs.com/docs/api.html#model_Model
 var loginUsuario = mongoose.model('loginUsuario', loginUsuarios_Esquema);

 //Lo exportamos
 module.exports = loginUsuario;
