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
            <th scope="col">Graduation year</th>
            <th scope="col">Options</th>
          </tr>
        </thead>
        <tbody>

        {this.state.students.map((student,index)=>(
         
           <tr>
            <th scope="row">{index +1} {student._id}</th>
            <td>
                <a class="stnames" href={`/get/${student._id}`} style={{textDecoration:'none'}} >
                {student.name}
                </a>
                
                
            </td>
            <td>{student.age}</td>
            <td>{student.grat_year}</td>
            <td>
              <a className="btn btn-warning" href={`/edit/${student._id}`}>
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

        <a href="/add">
          <button type="button" className="btn btn-success">Add Student</button>
        </a>
      </div>
      )
  }
}
