import './App.css';
import State_class from "./components/State_class";
import  Counter_funtion from "./components/Counter_function";
import Header from "./components/Header";
import AddStudents from "./components/AddStudents";
import AllStudents from "./components/AllStudents";
import EditStudent from "./components/EditStudent";
import GetStudent from "./components/GetStudent";
import {BrowserRouter as Router ,Route,Switch} from "react-router-dom";
import axios from 'axios';
import { Component } from 'react';



function App() {
  return (
    <Router>
      <div>
      <Header/>
      <div className="container">
        {/* <AllStudents/>
        <AddStudents/>
        <EditStudent/>
        <GetStudent/> */}
          
          <div className="container">
            <Switch>
                <Route path="/add" extract component={AddStudents}/>
                <Route path="/edit/:id" extract component={EditStudent}/>
                <Route path="/get/:id" extract component={GetStudent}/>
                <Route path="/" extract component={AllStudents}/>
            </Switch>
          
          </div>
      
      </div>
    </div>
    </Router>
    
  );
}

export default App;




