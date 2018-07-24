import React, { Component } from 'react';

class UpdateList extends Component {
    constructor(props){
        super();
        this.state ={

        }
    }// end of constructor
    // define the btn_update functionality
    btn_update(e){
        e.preventDefault();
        console.log("you have clickd update button");
        // fetch the data from the form
        var form_data = {
            name: this.refs.txt_name.value,
            id: this.refs.txt_id.value
        }
        console.log(JSON.stringify(form_data));

        // make a http request
        var request = new Request('http://localhost:5000/updatelist',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(form_data)
        });
        fetch(request)
            .then(function(res){
                if(res.status >= 400)
                throw new Error("Bad Response from the Server");
            })
            .then(function(data){
                console.log(data);
            })

    }
    render() {
        return (
            <div>
                <h2>Update your Items</h2>
                <input type="text" name="txt_id" ref="txt_id" placeholder="Item Id:"/>
                <input type="text" name="txt_name" ref="txt_name" placeholder="Item Name:"/>
                <button onClick = {this.btn_update.bind(this)}>Update</button>
            </div>
        );
    }
}

export default UpdateList;