const mongoose = require ('mongoose');
const User = mongoose.model('User')

const registro = async (req,res)=>
{ try{
    //CREAMOS NUESTRO USUARIO CON LO QUE VIENE DEL BODY

    const user = new User(req.body);

    const resp =await user.save();

    return res.status(201).json({mensaje: "Se creo usuario", datalles: resp});

} catch(e){
    return res.status(400).json({mensaje: "Error", datalles: e.message});

}
}






module.exports={
    registro,
    verUsuario
    
  };