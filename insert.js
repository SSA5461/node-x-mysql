const con = require('./config');
con.connect();

let query = 'insert into a values ("a", 123)';
con.query(query, function(error, fields, result){
    if(error) throw 'error';
    console.log('value insert success!!!');
});