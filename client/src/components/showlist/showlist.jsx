import React, { Component } from 'react';

class ShowList extends Component {
    constructor(props){
        super();
        this.state ={
            data:[]
        }
    }// end of construtor
    
    componentDidMount(){
        console.log("mounted");
        // make a http request
        var request = new Request('http://localhost:5000/allist',{
            method:'GET',
            headers:{'Content-Type':'application/json'}

        });
        fetch(request)
            .then(res => res.json())
            .then(data => this.setState({data:data}))

    }// end of component did mount
    // define the btn_remove functinality
    btn_remove(del_id){
        console.log("you have clicked the delete btn",del_id);
        // make a json variable to send it 
        var data ={
            del_id: del_id
        }
        // make a http requst for the backend
        var request = new Request('http://localhost:5000/delist',{
            method:'DELETE',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(data)
        });
        fetch(request)
            .then(res => res.json())
            .then(data => this.setState({data:data}));
            

    }// end of btn_remove function




    render() {
        let alldata = this.state.data
        return (
            <div>
                <h2>Your List Item :</h2>
                <table>
                    <thead>
                        <tr>
                            <th>S.NO</th>
                            <th>Item Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {alldata.map(data =>
                        <tr key={data.id} data={data}>
                            <td>{data.id}</td>
                            <td>{data.name}</td>
                            <td><button onClick={this.btn_remove.bind(this,data.id)}>Remove</button></td>
                        </tr>
                        )}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ShowList;