// load the express module
const express = require('express');
// to load the dotenv package
require('dotenv').config();
// load the pg database connection
const db = require('./lib/mypgcon');
// load the body parser module
const bodyParser = require('body-parser');
const app = express();
// load the controller file
const todoTask = require('./controller/todoTask');
const pgTask = require('./controller/pgTask');
// load the mysql connection
const con = require('./lib/mysqlcon');




// use middleware 
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});


// create new list router
app.post('/newlist',todoTask.newlist);

// create router to fetch all the details from the database
app.get('/allist',todoTask.allist);

// create router to delete all the details from the database
app.delete('/delist',todoTask.delist);

// create router to update the details from the user
app.post('/updatelist', todoTask.updatelist);

// create router to test the data from pgadmin
app.get('/pgselect',pgTask.pgselect);
app.delete('/pgdelete',pgTask.pgdelete);
app.post('/pgsave',pgTask.pgsave);
app.post('/pgupdate',pgTask.pgupdate);

// create server and assign the port dynamically
const PORT = process.env.PORT;
app.listen(PORT, ()=> console.log(`Listening PORT on ${PORT}`));