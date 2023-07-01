const { Router } = require('express')
const router = Router() //Obtener la función Router

const { login } = require('../Controllers/auth')

router.post('/login', login)
    
module.exports = router