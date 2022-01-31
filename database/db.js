const mysql = require('mysql')


const conexion = mysql.createConnection({
    host : '127.0.0.1',
    user : 'root',
    password : 'root',
    database : 'login_node_jwt',
    port: '8889',
    dialect: 'mysql'
})

conexion.connect( (error)=> {
    if(error){
        console.log('El error de conexión es: '+error)
        return
    }
    console.log('¡Conectado a la base de datos MySQL!')
})

module.exports = conexion