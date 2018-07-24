// create mysql connection
const mysql = require('mysql');
const con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'test'
});

con.connect(function(err){
    if(err){
        throw err;
    }
    else{
        console.log("Database Connected");
    }
});

// export this connection
module.exports = con;