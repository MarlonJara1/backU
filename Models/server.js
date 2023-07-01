const cookieParser = require('cookie-parser');
const express = require('express')
const dbConection = require('../database/config')
//Instalar el paquete dotenv
const bodyParser = require('body-parser');
const cors = require('cors');


class server{
    
    constructor () {
        this.app = express()

        this.port = process.env.PORT

        
        this.authPath = '/api/auth' //Ruta pública de la API
        this.ingredientesPath = '/api/ingrediente'
        this.usuarioPath = '/api/usuario'

        this.middlewares()//Seguridad

        this.routes()

        this.dbConectar()

    }

    middlewares() //Directorio Publico
    {
        this.app.use(cookieParser()); 
        this.app.use( cors() );
        this.app.use(bodyParser.json()) // for parsing application/json

    }

    routes()
    {
        this.app.use(this.authPath, require('../Routes/auth'))
        this.app.use(this.ingredientesPath, require('../Routes/ingredientes'))
        this.app.use(this.usuarioPath, require('../Routes/usuario'))
    }

    async dbConectar(){
        await dbConection()
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Escuchando el puerto ${this.port}`)
        })
    }
}

module.exports = server