const mongoose = require ('mongoose');
const User = mongoose.model('User')


const registro = async (req,res)=>
{ try{
    //CREAMOS NUESTRO USUARIO CON LO QUE VIENE DEL BODY
    const {password} = req.body;

    delete req.body.password;

    const user = new User(req.body);

    user.hashPassword(password);
 
    await user.save();

    return res.status(201).json({mensaje: "Se creo usuario", detalles: user.onSignGenerateJWT()});

} catch(e){
    return res.status(400).json({mensaje: "Error!", datalles: e.message});

}
};

const login = async (req,res)=>
{ try{
    //CREAMOS NUESTRO USUARIO CON LO QUE VIENE DEL BODY
    const {correo, password} = req.body;

    const user = await User.findOne ({correo});
    
    if(!user){
        return res.status(404).json({mensaje: "Error", datalles: "Usuario no existe"});
    }

    if(user.verifyPassword(password)){
        return res
        .status(200)
        .json({mensaje: "Login correcto", token: user.generateJWT()});
    }

    return res
    .status(400)
    .json({mensaje: "Error", detalles: "Verifica credenciales"});
    }    
    
    catch(e){
    return res.status(400).json({mensaje: "Error..", datalles: e.message});

}
}


const verUsuario = async (req, res)=>
{ try{
    if (req.user.tipo !== "admin")
    {return res
        .status (400)
        .json({mensaje: "Error", datalles: 'Acceso no atorizado'})
    }

    const usuarios= await  User.find();
if(!usuarios.length) 
return res.status(404).json({mensaje: "Error", datalles: 'Collection vacia'})
return res.status(200).json({mensaje: "Usurios encontrados", datalles: usuarios})
}
catch(e){return res.status(400).json({mensaje: "Error", datalles: e.message});
}

}

const filtrarUsuarios= async (req, res)=>
{ try{
    const usuarios= await  User.find(req.body);
if(!usuarios.length) 
return res.status(404).json({mensaje: "Error", datalles: 'No se encontro usuario'})
return res.status(200).json({mensaje: "Usurios encontrados", datalles: usuarios})
}
catch(e){return res.status(400).json({mensaje: "Error", datalles: e.message});
}

}


const eliminarUsuario= async (req, res)=>
{ try{
    const{id}= req.params;
    if(!id)
    return res.status(404).json({mensaje: "Error", datalles: 'Se necesita ID'})
    const usuario = await User.findById(id)
    if(!usuario) 
    return res.status(404).json({mensaje: "Error", datalles: 'No se encontro usuario'})
    const eliminado= await  User.findOneAndDelete(id);
    return res.status(200).json({mensaje: "Usurios eliminado", datalles: eliminado})
}
catch(e){return res.status(400).json({mensaje: "Error", datalles: e.message});
}
};


const actualizarUsuario = async (req,res) => {
    try{
const {id} =req.params;
const actualizado =await User.findByIdAndUpdate(id, {$set: req.body},{new:true});
return res.status(200).json({mensaje: "Atualizado", datalles: actualizado})

}catch(e){

    return res.status(404).json({mensaje: "Error", datalles: e.message})
}

}



module.exports={
    registro,
    verUsuario,
filtrarUsuarios,
eliminarUsuario,
actualizarUsuario,
login

    };