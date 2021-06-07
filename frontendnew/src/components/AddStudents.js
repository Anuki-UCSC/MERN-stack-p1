import React, { useState } from "react";
import axios from "axios";

export default function AddStudents(){

    const [name,setName]=useState();
    const [age,setAge]=useState();
    const [grat_year,set_grat_year]=useState();


    function sendData(e){
        e.preventDefault();
        const newStudent={
            name,
            age,
            grat_year
        }
        axios.post("http://localhost:8070/student/add", newStudent).then(()=>{
            alert("Student Added !")
        }).catch((err)=>{
            alert(err)
        })
    }

    return(
        <div>
        <form>
            <div className="container">
            <div class="form-group">
                    <label for="exampleInputEmail1">Name</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"
                    onChange={(e)=>{
                        setName(e.target.value);
                    }}
                    />
                </div>
                <br/>
                <div class="form-group">
                    <label for="exampleInputPassword1">Age</label>
                    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Enter age"
                    onChange={(e)=>{
                        setAge(e.target.value);
                    }}
                    />
                </div>
                <br/>

                <div class="form-group">
                    <label for="exampleInputPassword1">Graduation Year</label>
                    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Enter graduation year"
                    onChange={(e)=>{
                        set_grat_year(e.target.value);
                    }}
                    />
                </div>
                <br/>

               


                <button type="submit" class="btn btn-primary" onClick={sendData}>Submit</button>
            </div>
                
        </form>
        </div>

    );
}