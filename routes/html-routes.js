const mysql = require('mysql');

module.exports = function(app, connection) {
    app.get('/', function(reg, res) {
        //res.send('Hello from test');
        connection.query('SELECT * FROM join_us', function(err, data) {
            (err)?res.send(err):res.json({join_us: data});
        });
    });
};