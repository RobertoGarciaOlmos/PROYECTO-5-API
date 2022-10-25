

/**
 * 1-importar mongoose
 * 2. Crear el esquema 
 * 3. Exportar models
 */


//! 1
const mongoose = require ('mongoose')


//! 2
const UserSchema= new mongoose.Schema({

    nombre:{
        type: String,
        require: true,
    },
    planeta: {
        type: String,
        default:'Tierra'
    },
    edad:{
min: [18, `Tienes que ser mayor de edad`],
max:[100, `Ya estas muy viejo`],
    },
    tipo: {
        type: String,
        enum: [
            'cliente',
            'admin',
            'vendedor',
            'limpieza'
        ],
        default:'cliente'
    }
})

//! 3


mongoose.model('User',UserSchema, 'coleccionUser');
