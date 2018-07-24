// load the mysql connection
const con = require('../lib/mysqlcon');
module.exports = {
    // define new list funtion
    newlist:function(req, res){
        // get the form data from the react form
        var item_name = req.body.item_name;
        con.query(`INSERT INTO todolist (id, name) VALUES (NULL, '${item_name}')`,function(err,result,fields){
            if(err){
                throw err;
            }
            else{
                res.send(JSON.stringify(result));
                console.log("Data Inserted successfully");
            }
        })
    },// end of new list function
    // define for all the list 
    allist:function(req, res){
        //  fetch the data from the database
        con.query('SELECT * FROM `todolist`',function(err,result,fields){
            if(err){
                throw err;
            }
            else{
                res.send(JSON.stringify(result));
            }
        })
    },// end of all list funtion
    // define the delete functionality
    delist:function(req, res){
        // fetch the particular id from the react form
        let del_id = req.body.del_id;
        console.log(del_id);
        con.query(`DELETE FROM todolist WHERE todolist.id = ${del_id}`,function(err,result,fields){
            if(err){
                throw err;
            }
            else{
                console.log(`${del_id} has deleted`);
            }
        })
    },// end of the delete functionality
    // to define the update logic
    updatelist:function(req, res){
        // res.send("response from the update task");
        // fetch the data from react form
        let name = req.body.name;
        let id = req.body.id;
       con.query(`UPDATE todolist SET name = '${name}' WHERE todolist.id = ${id}`,function(err,result,fields){
           if(err){
               throw err;
           }
           else{
               console.log(`${id} data has deleted`);
           }
       })
    }

}// end of main module