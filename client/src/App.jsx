import React, { Component } from 'react';
import './App.css';
import Newlist from './components/newlist/newlist';
import ShowList from './components/showlist/showlist';
import UpdateList from './components/updatelist/updatelist';
import StudentList from './components/studentlist/studentlist';
import NewStudent from './components/newstudent/newstudent';
import UpdateStudent from './components/updatestudent/updatestudent';
class App extends Component {
  render() {
    return (
      <div className="App">
        <br/><br/>
        <Newlist />
        <hr/>
        <ShowList />
        <br/><br/>
        <UpdateList />
        <br/><br/>
        <StudentList />
        <br/><br/><hr/>
        <NewStudent />
        <br/><br/>
        <UpdateStudent />
        <hr/>
      </div>
    );
  }
}

export default App;
