import './App.css';
// import State_class from "./components/State_class";
// import  Counter_funtion from "./components/Counter_function";
// import Header from "./components/Header";
// import AddStudents from "./components/AddStudents";
// import {BrowserRouter as Router ,Route} from "react-router-dom";
import axios from 'axios';
import { Component } from 'react';



// function App() {
//   return (
//     <Router>
//       <div>
//       <Header/>
//       <div className="container">
//           <AddStudents/>
//           <State_class/>
//           < Counter_funtion/>
          
//           <div className="container">
//           <Route path="./add" extract component={AddStudents}/>
//           </div>
      
//       </div>
//     </div>
//     </Router>
    
//   );
// }

// export default App;


export default class App extends Component{
  constructor(props){
    super(props);

    this.state={
      students:[]
    };
  }

  componentDidMount()
  {
    this.retrieveStudents();
  }

  retrieveStudents(){
    axios.get("http://localhost:8070/student").then(res=>{
      if(res.data.success){
        this.setState({
          students:res.data.existingStudent
        });

        console.log(this.state.students);
      }
    });
  }


  render(){
    return(
      
      <div>
        <p>All Posts</p>




        {this.state.students.map(student=>(
         <div>
           <ul>
           <li>{student.name}</li>
           <li>{student.age}</li>
           <li>{student.grat_year}</li>
           <li>hi hi hi</li>
           </ul>
           
         </div>
    ))
       
       }
      </div>
      )
  }
}
