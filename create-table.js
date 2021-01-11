const { Console } = require('console');
const con = require('./config');

con.connect()

let query = 'create table a (nama varchar(10), id int)';

con.query(query, function(error, result, fields){
    if(error) throw 'error';
    console.log("table created");
});