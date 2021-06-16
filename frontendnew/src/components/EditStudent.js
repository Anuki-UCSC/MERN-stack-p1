import React, { Component } from "react";
import axios from 'axios';

export default class EditStudent extends Component{
    constructor(props){
        super(props);

        this.state={
            student:[]
        };
    }

    componentDidMount(){
        const id=this.props.match.params.id;
        axios.get(`http://localhost:8070/student/get/${id}`).then((res)=>{// there can be problem here
            if(res.data.success){
                this.setState({
                    student:res.data.studentData // there can be problem here
                });
                console.log(this.state.student);
            }
            
        });

    }
    render(){

        const {name , age, grat_year} = this.state.student;

        return(
            <div>
                <h1>Update Details</h1>
        <form>
            <div className="container">
            <div class="form-group">
                    <label for="exampleInputEmail1">Name</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder={name}
                    // onChange={(e)=>{
                    //     setName(e.target.value);
                    // }}
                    />
                </div>
                <br/>
                <div class="form-group">
                    <label for="exampleInputPassword1">Age</label>
                    <input type="text" class="form-control" id="exampleInputPassword1" placeholder={age}
                    // onChange={(e)=>{
                    //     setAge(e.target.value);
                    // }}
                    />
                </div>
                <br/>

                <div class="form-group">
                    <label for="exampleInputPassword1">Graduation Year</label>
                    <input type="text" class="form-control" id="exampleInputPassword1" placeholder={grat_year}
                    // onChange={(e)=>{
                    //     set_grat_year(e.target.value);
                    // }}
                    />
                </div>
                <br/>

               


                <button type="submit" class="btn btn-primary">Submit</button>
            </div>
                
        </form>
        </div>
        )
    }
}