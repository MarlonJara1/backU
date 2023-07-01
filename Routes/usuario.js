const {Router} = require('express')

const route = Router()

//Importar el controlador
const {getUsuario, postUsuario, putUsuario, deleteUsuario} = require('../Controllers/usuario')
const  {isAuthenticated}  = require('../Controllers/auth')


route.get('/', isAuthenticated, getUsuario)

route.post('/', isAuthenticated, postUsuario)

route.put('/', putUsuario)

route.delete('/', deleteUsuario)


module.exports = route   
