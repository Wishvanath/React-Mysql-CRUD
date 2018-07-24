import React, { Component } from 'react';

class NewStudent extends Component {
    // define the constructor
    constructor(props){
        super();
        this.state={
            title:"New Student SignUp Form"
        }
    }// end of constructor
    // define the btn submit functionality
    btn_submit(e){
        e.preventDefault();
        console.log("you have clicked the submit button");
        // get the form data 
        let form_data ={
            st_id:this.refs.txt_id.value,
            first_name: this.refs.txt_first_name.value,
            last_name: this.refs.txt_last_name.value,
            st_email: this.refs.txt_email.value,
            st_contact_no: this.refs.txt_contact_no.value
        }
        // check the form data into console
        console.log(JSON.stringify(form_data));
        // make a http request to send it in express backend
        var request = new Request('http://localhost:5000/pgsave',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(form_data)
        });
        fetch(request)
            .then(function(res){
                if(res.status >= 400){
                    throw new Error("Bad Response from the Server")
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
                <form>
                    <input type="text" name="txt_id" ref="txt_id" placeholder="S.NO"/><br/>
                    <input type="text" name="txt_first_name" ref="txt_first_name" placeholder="First Name:"/><br/>
                    <input type="text" name="txt_last_name" ref="txt_last_name" placeholder="Last Name:" /><br/>
                    <input type="text" name="txt_email" ref="txt_email" placeholder="Email Id:"/><br/>
                    <input type="text" name="txt_contact_no" ref="txt_contact_no" placeholder="Contact NO:"/><br/><br/>
                    <input type="submit" name="btn_submit" value="Submit" onClick={this.btn_submit.bind(this)}/>
                </form>
            </div>
        );
    }
}

export default NewStudent;