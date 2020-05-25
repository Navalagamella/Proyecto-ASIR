//Importamos mongoose
const mongoose = require('mongoose');
//Importamos el esquema
const todoList_Esquema = require('./app.modelo.js');

//creamos los metodos de registro de dato, lectura y borrado
 todoList_Esquema.statics = {
   anadir: function (data, cb) {
     const todoObjeto = new this(data);
     //console.log(todoObjeto);
     todoObjeto.save(cb);
   },
   obtener: function (query, cb) {
     this.find(query, cb);
   },
   borrar: function (query, cb) {
     this.find(query, cb);
   }
 };

 //Asociamos el esquema a un modelo
 //https://mongoosejs.com/docs/api.html#mongoose_Mongoose-Model
 //https://mongoosejs.com/docs/api.html#model_Model
 var todoList = mongoose.model('todoList', todoList_Esquema);

 //Lo exportamos
 module.exports = todoList;
