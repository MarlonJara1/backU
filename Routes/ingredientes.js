const {Router} = require('express')

const route = Router()

const {getIngrediente, postIngrediente, putIngrediente, deleteIngrediente} = require('../Controllers/ingredientes')
const  {isAuthenticated}  = require('../Controllers/auth')

route.get('/', isAuthenticated, getIngrediente)
route.post('/', isAuthenticated,  postIngrediente)
route.put('/', putIngrediente)
route.delete('/', deleteIngrediente)


module.exports = route  