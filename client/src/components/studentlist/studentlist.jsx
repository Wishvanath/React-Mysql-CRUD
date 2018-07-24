import React, { Component } from 'react';

class StudentList extends Component {
    // define the constructor
    constructor(props){
        super();
        this.state = {
            data:[]
        }
    }// end of constructor

    // component did mount method
    componentDidMount(){
        console.log("student component mounted");
        // make a http request
        var request = new Request('http://localhost:5000/pgselect',{
            method:'GET',
            headers:{'Content-Type':'application/json'}

        });
        fetch(request)
            .then(res => res.json())
            .then(data => this.setState({data:data}))
    }//end of component didmount function
    // define the btn-delete functionality
    btn_delete(st_id){
       console.log(`You have clicked the ${st_id} student`);

        // get the form data
        var form_data ={
            st_id:st_id
        }
    //    make a http requst for express backend
    var request = new Request('http://localhost:5000/pgdelete',{
        method:'DELETE',
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
        // fetch the state data 
        let state_data = this.state.data;
        return (
            <div>
                <h2>Student List</h2><hr/>
                {/* {JSON.stringify(state_data)} */}
                <table>
                    <thead>
                        <tr>
                            <th>S.No</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email Id</th>
                            <th>Contact NO</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {state_data.map(data =>
                        <tr key={data.st_id} data={data}>
                            <td>{data.st_id}</td>
                            <td>{data.first_name}</td>
                            <td>{data.last_name}</td>
                            <td>{data.st_email}</td>
                            <td>{data.st_contact_no}</td>
                            <td><button onClick={this.btn_delete.bind(this,data.st_id)}>Delete</button></td>
                        </tr>
                        )}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default StudentList;