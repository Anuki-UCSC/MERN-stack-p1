import './App.css';
import State_class from "./components/State_class";
import  Counter_funtion from "./components/Counter_function";
import Header from "./components/Header";
import AddStudents from "./components/AddStudents";
import {BrowserRouter as Router ,Route} from "react-router-dom";


function App() {
  return (
    <Router>
      <div>
      <Header/>
      <div className="container">
          <State_class/>
          < Counter_funtion/>
          
          <div className="container">
          <Route path="./add" extract component={AddStudents}/>
          </div>
      
      </div>
    </div>
    </Router>
    
  );
}

export default App;
