import './App.css';
import State_class from "./components/State_class";
import  Counter_funtion from "./components/Counter_function";
import Header from "./components/Header";
import AddStudents from "./components/AddStudents";
import AllStudents from "./components/AllStudents";
import EditStudent from "./components/EditStudent";
import GetStudent from "./components/GetStudent";

import {BrowserRouter as Router ,Route} from "react-router-dom";
import axios from 'axios';
import { Component } from 'react';



function App() {
  return (
    <Router>
      <div>
      <Header/>
      <div className="container">
          <AddStudents/>
          <State_class/>
          < Counter_funtion/>
          
          <div className="container">
          <Route path="./add" extract component={AddStudents}/>
          <Route path="./show" extract component={AllStudents}/>
          <Route path="./edit/:id" extract component={EditStudent}/>
          <Route path="student/:id" extract component={GetStudent}/>
          </div>
      
      </div>
    </div>
    </Router>
    
  );
}

export default App;




