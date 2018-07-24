import React, { Component } from 'react';

class Newlist extends Component {
    // define constructor
    constructor(props){
        super();
    };// end of constructor

    // define the btn_add functionality
    btn_add(event){
        event.preventDefault();
        console.log("you have clicked the btn_add ");
        let form_data ={
            item_name: this.refs.txt_item.value
        }
        console.log(JSON.stringify(form_data));
        // make a http request
        var request = new Request('http://localhost:5000/newlist',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify(form_data)
        });
        fetch(request)
            .then(function(res){
                if(res.status >= 400){
                    throw new Error("Bad Response from the server");
                }
            })
            .then(function(data){
                // console.log(data);
            })
            this.refs.txt_item.value ="";
    }// end of btn_add event

    render() {
        return (
            <div>
                <form>
                    <input type="text" name="txt_item" ref="txt_item" placeholder="ItemName:"/>
                    <input type="submit" name="btn_submit" value="Add" onClick={this.btn_add.bind(this)}/>
                </form>
            </div>
        );
    }
}

export default Newlist;