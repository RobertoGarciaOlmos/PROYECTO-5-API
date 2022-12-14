
const mongoose = require ('mongoose');
const Cupcake = mongoose.model('Cupcake')

const newCupcake = async (req,res)=>
{ try{
    if (req.user.tipo !== "admin") {
        return res
        .status(403)
        .json({mensaje: "Error", 
        datalles: 'No cuenta con permisos para esta acción'
    });
    }




    //CREAMOS NUESTRO USUARIO CON LO QUE VIENE DEL BODY

    const cupcake = new Cupcake(req.body);

    const resp =await cupcake.save();

    return res.status(201).json({mensaje: "Se creo nuevo producto", datalles: await resp.populate({
        path:"UsuarioCreador",
        select:{
            nombre:true
        }

    })});

} catch(e){
    return res.status(400).json({mensaje: "Error", datalles: e.message});

}
}


const verCupcake = async (req, res)=>
{ try{
    const cupcakes= await  Cupcake.find().populate({
        path:"UsuarioCreador",
        select:{
            nombre:true
        }

    });
if(!cupcakes.length) 
return res.status(404).json({mensaje: "Error", datalles: 'Collection vacia'})
return res.status(200).json({mensaje: "Cupcakes / Productos encontrados", datalles: cupcakes})
}
catch(e){return res.status(400).json({mensaje: "Error", datalles: e.message});
}

}

// const filtrarCupcakes= async (req, res)=>
// { try{
//     const Cupcakes= await  Cupcake.find(req.body);
// if(!Cupcakes.length) 
// return res.status(404).json({mensaje: "Error", datalles: 'No se encontro Cupcake / Producto'})
// return res.status(200).json({mensaje: "Cupcakes encontrados / Producto", datalles: usuarios})
// }
// catch(e){return res.status(400).json({mensaje: "Error", datalles: e.message});
// }

// }


const eliminarCupcake= async (req, res)=>
{ try{
    const{id}= req.params;
    if(!id)
    return res.status(404).json({mensaje: "Error", datalles: 'Se necesita ID'})
    const cupcake = await Cupcake.findById(id)
    if(!cupcake) 
    return res.status(404).json({mensaje: "Error", datalles: 'No se encontro Cupcake / Producto'})
    const eliminado= await  Cupcake.findOneAndDelete(id);
    return res.status(200).json({mensaje: "Cupcake / Producto eliminado", datalles: eliminado})
}
catch(e){return res.status(400).json({mensaje: "Error", datalles: e.message});
}
};


const actualizarCupcake = async (req,res) => {
    try{
const {id} =req.params;
const actualizado =await Cupcake.findByIdAndUpdate(id, {$set: req.body},{new:true});
return res.status(200).json({mensaje: "Atualizado", datalles: actualizado})

}catch(e){

    return res.status(404).json({mensaje: "Error", datalles: e.message})
}

}



module.exports={
    newCupcake,
    verCupcake,
    eliminarCupcake,
    actualizarCupcake
    };