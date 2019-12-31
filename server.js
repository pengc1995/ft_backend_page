const express = require('express'); //express is a modul of node to make routes to database

const PORT = process.env.PORT || 3000; //Set the port to 3000 OR let the process set the port

const mysql = require('mysql'); //require mysql in mode module to use ot

const app = express(); //Initializa Express

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'test'
});

connection.connect(function(err){
    (err)? console.log(err): console.log(connection);
});

require('./routes/html-routes')(app, connection);

/* Start the server */
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))