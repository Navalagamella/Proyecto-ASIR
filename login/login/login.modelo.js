//Este archivo guarda el esquema y modelo del almacenamiento de los Usuarios
//en MongoDB. Se trabaja con el módulo mongoose.
//Activamos mongoose
//https://mongoosejs.com/docs/api.html
const mongoose = require('mongoose');

//Creamos el modelo de esquema de la base de datos
// https://mongoosejs.com/docs/guide.html#definition
//Primero definimos el esquema
    //https://mongoosejs.com/docs/api.html#mongoose_Mongoose-Schema
    var Schema = mongoose.Schema;

          //La forma con la que se accede es por e-mail, es por ello que debe ser única en BD.
          var loginUsuarios_Esquema = new Schema({
            nombre: {
              type: String,
              required: true,
              trim:true
            },
            email: {
              type: String,
              required: true,
              unique: true
            },
            password: {
              type: String,
              required: true,
              trim: true
            }
            },{
            timestamps: true
            });

//Asociamos el esquema a un modelo
//https://mongoosejs.com/docs/api.html#mongoose_Mongoose-Model
//https://mongoosejs.com/docs/api.html#model_Model
var loginUsuario = mongoose.model('loginUsuarios', loginUsuarios_Esquema);
//Lo exportamos
module.exports = loginUsuario;
//A partir de ahora tenemos el modelo de loginUsuarios que tendrá las propiedades que le hemos indicado anteriormente.
//tenemos que ir a ./login.controlador.js que es donde haremos uso de este modelo.
