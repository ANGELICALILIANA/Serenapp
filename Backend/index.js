const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

//Cors
const cors = require('cors');

app.get('/', (req, res) => {
    res.send('Hola Mundo')
    console.log('Bienvenido al backend');
})

//Conexión a base de datos
const mysql = require('mysql');

//Parámetros de conexión
const db = mysql.createConnection({
    host: 'localhost',                      //Puerto de mysql
    user: 'root',                           //Depende de la cuenta
    password: '1234',
    database: 'serenapp',
    port: '3306',
    multipleStatements: true,               //Multiples revisiones
});

db.connect(function (error) {
    if (error)
        console.log(error)
    else
        console.log('Base de datos conectada');
});

app.route('/user')
    .get((req, res) => {
        //Conexión con bases de datos
        const query = db.query('select * from generosmusicales', (error, resultado) => {
            try {
                console.log('Get de usuarios');
                res.json(resultado);
            } catch (error) {
                res.json({ error: error.mensaje })
            }
        });
    });

app.listen(port, () => {
    console.log(`Example app listen at http://localhost:${port}`);
})