//Activamos mongoose
//https://mongoosejs.com/docs/api.html
const mongoose = require('mongoose');

//Creamos el modelo de esquema de la base de datos
// https://mongoosejs.com/docs/guide.html#definition
//Primero definimos el esquema
    //https://mongoosejs.com/docs/api.html#mongoose_Mongoose-Schema
    var Schema = mongoose.Schema;

          //La forma con la que se accede es por e-mail, es por ello que debe ser única en BD.
          var todoList_Esquema = new Schema({
            grupo_id: {
              type: String,
              required: true
            },
            contenido: {
              type: String,
            },
            completado: {
              type: Boolean,
              default: false
            }
          });


//Lo exportamos
module.exports = todoList_Esquema;
//A partir de ahora tenemos el esquema de loginUsuarios que tendrá las propiedades que le hemos indicado anteriormente.
//tenemos que ir a ./login.controlador.js que es donde haremos uso de este modelo.
