import React, { Component } from 'react';

class UpdateStudent extends Component {
    // define the constructor
    constructor(props){
        super();
        this.state={
            title:"Update Student Form"
        }
    }// end of constructor
    // define the btn-update functionality
    btn_update(e){
        e.preventDefault();
        // get the form data
        let form_data ={
            st_id: this.refs.txt_id.value,
            first_name: this.refs.txt_first_name.value,
            last_name: this.refs.txt_last_name.value,
            st_email: this.refs.txt_email.value,
            st_contact_no: this.refs.txt_contact_no.value
        };
        console.log(JSON.stringify(form_data));
        // make a http request to send the data backend
        var request = new Request('http://localhost:5000/pgupdate',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(form_data)
        });
        fetch(request)
            .then(function(res){
                if(res.status >= 400){
                    throw new Error("Bad response from the server");
                }
            })
            .then(function(data){
                console.log(data);
            })
    }
    render() {
        let title = this.state.title;
        return (
            <div>
                <h2>{title}</h2>
                <input type="text" name="txt_id" ref="txt_id" placeholder="ID:"/><br/>
                <input type="text" name="txt_first_name" ref="txt_first_name" placeholder="First Name:" /><br/>
                <input type="text" name="txt_last_name" ref="txt_last_name" placeholder="Last Name:"/><br/>
                <input type="text" name="txt_email" ref="txt_email" placeholder="Email ID:"/><br/>
                <input type="text" name="txt_contact_no" ref="txt_contact_no" placeholder="Contact No:"/><br/><br/>
                <button onClick={this.btn_update.bind(this)}>Update</button>
            </div>
        );
    }
}

export default UpdateStudent;