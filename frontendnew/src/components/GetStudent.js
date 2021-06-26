import React, { Component } from "react";
import axios from "axios";

export default class GetStudent extends Component{
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

        const {_id, name , age, grat_year} = this.state.student;

        return(
            <div>
                <dl class="row">

                <h1>Profile</h1>
                <hr />
                <dt class="col-sm-3"> </dt>
                <dd class="col-sm-9"></dd>
                <dt class="col-sm-3">Full Name </dt>
                <dd class="col-sm-9">{name}</dd>

                <dt class="col-sm-3">Age</dt>
                <dd class="col-sm-9">{age}</dd>

                <dt class="col-sm-3">Graduation Year</dt>
                <dd class="col-sm-9">{grat_year}</dd>
                

                </dl>
                <a className="btn btn-primary" href={"/edit/"+_id}>
                <i className="fas fa-edit"></i>&nbsp;Edit Profile
                </a>
            </div>
            
            
        )
    }
}