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
    return res.status(400).json({mensaje: "Error!", detalles: e.message});

}
};

const login = async (req,res)=>
{ try{
    //CREAMOS NUESTRO USUARIO CON LO QUE VIENE DEL BODY
    const {correo, password} = req.body;

    const user = await User.findOne ({correo});
    
    if(!user){
        return res.status(404).json({mensaje: "Error", detalles: "Usuario no existe"});
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
    return res.status(400).json({mensaje: "Error..", detalles: e.message});

}
}


const verUsuario = async (req, res)=>
{ try{
    if (req.user.tipo !== "admin")
    {return res
        .status (400)
        .json({mensaje: "Error", detalles: 'Acceso no atorizado'})
    }

    const usuarios= await  User.find();
if(!usuarios.length) 
return res.status(404).json({mensaje: "Error", detalles: 'Collection vacia'})
return res.status(200).json({mensaje: "Usurios encontrados", detalles: usuarios})
}
catch(e){return res.status(400).json({mensaje: "Error", detalles: e.message});
}

}

const filtrarUsuarios= async (req, res)=>
{ try{
    const usuarios= await  User.find(req.body);
if(!usuarios.length) 
return res.status(404).json({mensaje: "Error", detalles: 'No se encontro usuario'})
return res.status(200).json({mensaje: "Usurios encontrados", detalles: usuarios})
}
catch(e){return res.status(400).json({mensaje: "Error", detalles: e.message});
}

}


const eliminarUsuario= async (req, res)=>
{ try{
    const{id}= req.params;
    if(!id)
    return res.status(404).json({mensaje: "Error", detalles: 'Se necesita ID'})
    const usuario = await User.findById(id)
    if(!usuario) 
    return res.status(404).json({mensaje: "Error", detalles: 'No se encontro usuario'})
    const eliminado= await  User.findOneAndDelete(id);
    return res.status(200).json({mensaje: "Usurios eliminado", detalles: eliminado})
}
catch(e){return res.status(400).json({mensaje: "Error", detalles: e.message});
}
};


const actualizarUsuario = async (req,res) => {
    try{
const {id} =req.params;
const actualizado =await User.findByIdAndUpdate(id, {$set: req.body},{new:true});
return res.status(200).json({mensaje: "Atualizado", detalles: actualizado})

}catch(e){

    return res.status(404).json({mensaje: "Error", detalles: e.message})
}

}

const verInfoUsuario = async (req, res) => {
    try {
    const usuarioInfo = await User.findById(req.user.idUser, {
        nombre: 1,
        correo: 1,
        tipo: 1,
        edad: 1,
        img: 1,
        apellido: 1,
    });
    if (!usuarioInfo) 
    return res.status(404).json({ mensaje: "Error", detalles: "Este usuario no existe." });
    return res.status(200).json({ mensaje: "Usuario encontrado", detalles: usuarioInfo });
    } catch (e) {
    return res.status(400).json({ mensaje: "Error", detalles: e.message });
    }
  };

module.exports={
    verInfoUsuario,
    registro,
    verUsuario,
filtrarUsuarios,
eliminarUsuario,
actualizarUsuario,
login
    };