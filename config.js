const mysql = require('mysql');
const { rootCertificates } = require('tls');
let con = mysql.createConnection({
    host : '127.0.0.1',
    user : "root",
    password : "",
    database : "ssa"
});

module.exports = con;