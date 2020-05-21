//Activamos mongoose
//https://mongoosejs.com/docs/api.html
const mongoose = require('mongoose');

//Creamos el modelo de esquema de la base de datos
// https://mongoosejs.com/docs/guide.html#definition
//Primero definimos el esquema
    //https://mongoosejs.com/docs/api.html#mongoose_Mongoose-Schema
    var Schema = mongoose.Schema;

          var todoList_Esquema = new Schema({
            grupo_id: {
              type: String,
              required: true
            },
            autor: {
              type: String,
              required: true
            },
            contenido: {
              type: String,
            },
            completado: {
              type: Boolean,
              default: false
            },
            publico: {
              type: Boolean,
              default: false
            }
          });


//Lo exportamos
module.exports = todoList_Esquema;
