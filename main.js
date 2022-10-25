const mongoose= require('mongoose');
mongoose.connect("mongodb+srv://mongoRoberto:mongoRoberto@cluster0.8vfswqi.mongodb.net/proyecto5_ATAPI");

const Persona = mongoose.model('Persona',{
    nombre:String,
    edad:Number,
    activo:Boolean,
})

const Mario = new Persona({
nombre:"Juan",
edad:17,
activo:false,
})

Mario.save().then(() => {console.log("saves");});

Persona.find({nombre:"Mario"}).then((Persona)=>{console.log(Persona)})


"hola"