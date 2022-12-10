

/**
 * 1-importar mongoose y crypto
 * 2. Crear el esquema 
 * 3. Exportar models
 */


//! 1
const mongoose = require ('mongoose');
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const uniqueValidator= require("mongoose-unique-validator");


//! 2
const UserSchema= new mongoose.Schema({
    nombre:{
        type: String,
        require: true,
    },
    correo: {
        type: String,
        require: true,
        unique: true,
        match:[/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Email inválido"],
    },
    planeta: {
        type: String,
        default:'Tierra'
    },
    edad:{
        type:Number,
min: [18, `Tienes que ser mayor de edad`],
max: [100, `Ya estas muy viejo`]
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
    },
    password:{
        type: String,
    },
    salt: {
        type: String,
    }
    


})


//! 3

UserSchema.plugin(uniqueValidator);

UserSchema.methods.hashPassword = function(password) {
    this.salt=crypto.randomBytes(16).toString("hex");
    this.password = this.encryptString(password,this.salt)};

UserSchema.methods.encryptString = function(stringToEncrypt,salt) {
   return crypto
    .pbkdf2Sync(stringToEncrypt, this.salt,1000,251,'sha512').toString('hex')
};


UserSchema.methods.verifyPassword= function(password)
{return this.password === this.encryptString(password,this.salt);

} 

UserSchema.methods.generateJWT = function() {
return jwt.sign({idUser: this._id, tipo: this.tipo}, process.env.secret)
};

UserSchema.methods.onSignGenerateJWT = function () {
    return {
        idUser: this._id,
        tipo:this.tipo,
        token: this.generateJWT(),
    };
}


mongoose.model('User',UserSchema, 'coleccionUser');
