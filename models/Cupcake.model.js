/**
 * 1-importar mongoose
 * 2. Crear el esquema 
 * 3. Exportar models
 */


//! 1
const mongoose = require ('mongoose');


//! 2
const CupcakeSchema= new mongoose.Schema({
    nombre:{
        type: String,
        require: true,
    },
    categoria: {
        type: String,
        default:'cupcake'
    },
    costo:{
        type:Number,
        require: true,
min: [0.1, `No puedes regalar el producto`],
    },

    Tamaño: {
        type: String,
        default:'M'
    },
    UsuarioCreador: {
        type: mongoose.ObjectId,
        ref:'User'
    },
    })

//! 3
mongoose.model('Cupcake',CupcakeSchema, 'coleccionCupcake');
