// load the connection variable of the postgressql
const db = require('../lib/mypgcon.js');
module.exports = {
    pgselect:function(req, res){
        // res.send("response generated from the pgselect router");
        const query ={
            text: 'SELECT * from student.st_btech'

        };
        db.query(query,function(err,result){
            if(err){
                console.log(err);
            }
            else{
                res.send(result.rows);
            }
        })
        
    },// end of pgselect
    // to delete the data from database
    pgdelete:function(req,res){
        // res.send("Response from the pgdelete router");
        // to receive the form data
        var del_id = req.body.st_id;
        console.log(del_id);
        // write query to delte student from the database
        const query ={
            text:`DELETE FROM student.st_btech WHERE st_id =${del_id}`,
        }
        db.query(query,function(err,result){
            if(err){
                console.log(err);
            }
            else{
                console.log("Data deleted Successfully");
            }
        })
    },// end of pgdelete function
    // define function to save the data
    pgsave:function(req, res){
        // res.send("Response generated from the pgsave router");
        // fetch the form data from react
        let st_id = req.body.st_id;
        let first_name = req.body.first_name;
        let last_name = req.body.last_name;
        let st_email = req.body.st_email;
        let st_contact_no = req.body.st_contact_no;

        // write query to save the data into the database
        const query = {
            text:'INSERT INTO student.st_btech(st_id, first_name, last_name, st_email,   st_contact_no) VALUES ($1, $2, $3, $4, $5)',
            values:[`${st_id}`,`${first_name}`,`${last_name}`,`${st_email}`,`${st_contact_no}`],
        };
        console.log(query);
        db.query(query,function(err,result){
            if(err){
                console.log(err);
            }
            else{
                console.log("Data Inserted Successfully");
            }
        })
        
    },// end of pg save module
    pgupdate:function(req, res){
        // res.send("Response from the pgupdate router");
        // fetch the data from react form
        let st_id = req.body.st_id;
        let first_name = req.body.first_name;
        let last_name = req.body.last_name;
        let st_email = req.body.st_email;
        let st_contact_no = req.body.st_contact_no;
        // write update query
        const query ={
            text:`UPDATE student.st_btech SET st_id= ${st_id}, first_name='${first_name}', last_name='${last_name}', st_email= '${st_email}', st_contact_no= ${st_contact_no} WHERE st_id = ${st_id};`,
        };
        console.log(query);
        db.query(query,function(err, result){
            if(err){
                console.log(err);
            }
            else{
                console.log("Updated Data Successfully");
            }
        })
    }

}// end of main module