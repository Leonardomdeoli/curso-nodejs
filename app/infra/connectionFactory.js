var mysql = require('mysql');

function createDBConnection() {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '123456',
        database: 'casa_do_codigo_nodejs'
    });
}

//wrapper
module.exports = function () {
    return createDBConnection;
}