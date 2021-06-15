import axios from 'axios';
import { Component } from 'react';


export default class AllStudents extends Component{
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
      
      <div className="container">

        <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Full Name</th>
            <th scope="col">Age</th>
            <th scope="col">Graguation year</th>
            <th scope="col">Graguation year</th>
          </tr>
        </thead>
        <tbody>

        {this.state.students.map((student,index)=>(
         
           <tr>
            <th scope="row">{index +1}</th>
            <td>{student.name}</td>
            <td>{student.age}</td>
            <td>{student.grat_year}</td>
            <td>
              <a className="btn btn-warning" href="#">
                <i className="fas fa-edit"></i>&nbsp;Edit
              </a>&nbsp;
              <a className="btn btn-danger" href="#">
              <i className="fas fa-trash-alt"></i>&nbsp;Delete
              </a>
            </td>
          </tr>
    ))}
          
        </tbody>
      </table>     
      </div>
      )
  }
}
