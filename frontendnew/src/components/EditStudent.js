import React, { Component } from 'react';
import axios from 'axios';

export default class EditStudent extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            name:"",
            age:"",
            grat_year:""
        }
    }
    handleInputChange=(e)=>{
        const {name,value}=e.target;

        this.setState({
            ...this.state,
            [name]:value
        })
    }



    editStudentDetails=(e)=>{
        e.preventDefault();

        const id=this.props.match.params.id;
         const {name, age,grat_year}=this.state;
         const data={
                name:name,
                age:age,
                grat_year:grat_year
            }

        axios.put(`http://localhost:8070/student/update/${id}`, data).then(
            (res)=>{
                if(res.data.success)
                {
                    alert("Student details updated Successfully")
                    this.setState(
                       { name:"",
                         age:"",
                         grat_year:""}

                    )
                }else{
                    console.log("error in sending data")
                }
            }
        )
        console.log(data);
    }

componentDidMount(){
    const id=this.props.match.params.id;
    axios.get(`http://localhost:8070/student/get/${id}`).then((res)=>{// there can be problem here
        if(res.data.success){
            this.setState({
                // student:res.data.studentData // there can be problem here
                name:res.data.studentData.name,
                age:res.data.studentData.age,
                grat_year:res.data.studentData.grat_year
            });
            
        }
        
    });

 }

    render() {
        return(
            <div className="container">
                <form className="needs-validation" noValidate>
                    <div className="form-group" style={{marginTop:'15px'}}>
                    <label>Name</label>
                       <input type="text" name="name" class="form-control" id="exampleInputEmail1"  
                        value={this.state.name}
                        onChange={this.handleInputChange
                            }
                        />
                        
                    </div>
    
                    <div className="form-group">
                    <label for="exampleInputPassword1">Age</label>
                    <input type="text" name="age" class="form-control" id="exampleInputPassword1"  
                        value={this.state.age}
                        onChange={this.handleInputChange}
                        />
                        
                    </div>
    
                    <div className="form-group">
                    <label for="exampleInputPassword1">Graduation Year</label>
                     <input type="text" name="grat_year" class="form-control" id="exampleInputPassword1" 
                    value={this.state.grat_year}
                        onChange={
                            this.handleInputChange
                        }/>
                        
                    </div>
                   
                    <button type="submit" class="btn btn-primary" style={{marginTop:20}}
                    onClick={this.editStudentDetails}
                    >
                    <i className='far fa-check-square'></i>
                    &nbsp;Update</button>
                </form>
            </div>
        );
    }

}
