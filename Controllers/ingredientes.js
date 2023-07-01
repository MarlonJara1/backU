const {response} = require('express')
const Ingrediente = require('../Models/ingredientes')
const bcrypt = require('bcrypt') 

const getIngrediente = async(req, res=response) => {
    let mensaje = ''
    try {
        const ingredientes = await Ingrediente.find()
        mensaje = ingredientes
    } catch (error) {
        mensaje = error
    }

   res.json({
        ingredientes:mensaje
    })
    
}

const postIngrediente = async(req, res = response) =>{

    const body = req.body 
    let mensaje = ''
    const ingrediente = new Ingrediente(body)
    console.log(body)
    try {
        await ingrediente.save()
        mensaje = 'Ingrediente registrado exitosamente'
    } catch (error) {
        if (error.errors) {
            const errorMessages = Object.values(error.errors).map((err) => err.message);
            mensaje = errorMessages.join('. ');
          } else {
            mensaje = error.message;
          }
    }

    res.json({
        mensaje
    })
   
}

const putIngrediente = async(req, res = response) =>{
    const body = req.body
     console.log(body)

    let mensaje = ''

    try {
        await Ingrediente.findOneAndUpdate({_id:body._id}, {nombreIngrediente:body.nombreIngrediente, descripcionIngrediente:body.descripcionIngrediente, precioIngrediente:body.precioIngrediente, estadoIngrediente:body.estadoIngrediente})
        mensaje = 'Ingrediente modificado'
        
    } catch (error) {
        if (error.errors) {
            const errorMessages = Object.values(error.errors).map((err) => err.message);
            mensaje = errorMessages.join('. ');
          } else {
            mensaje = error.message;
          }
    }
    res.json({
        mensaje:mensaje
    })
   
}

const deleteIngrediente = async(req, res = response) =>{
    const body = req.body
    let mensaje = ''

    try {
        await Ingrediente.deleteOne({_id:body._id})
        mensaje = 'Eliminado exitosamente'
    } catch (error) {
        mensaje = error
    }
    res.json({
        mensaje
    })
   
}

module.exports = {
    getIngrediente,
    postIngrediente,
    putIngrediente,
    deleteIngrediente
}

