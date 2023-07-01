const {Schema, model} = require('mongoose') 

const IngredienteSchema = Schema({
    
    nombreIngrediente: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },

    descripcionIngrediente: {
        type: String,
        required: [true, 'La descripcion es obligatoria']
    },

    precioIngrediente: {
        type: Number,
        required: [true, 'El precio es obligatorio']
    },

    estadoIngrediente: {
        type: String,
        enum: ['Activo', 'Inactivo'],
        required: [true]
    }
})

module.exports = model('Ingrediente', IngredienteSchema)