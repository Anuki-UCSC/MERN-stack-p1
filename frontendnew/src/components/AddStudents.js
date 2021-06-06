import React, { useState } from "react";

export default function AddStudents(){

    const [name,setName]=useState();
    const [age,setAge]=useState();
    const [grat_year,set_grat_year]=useState();

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
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"
                    onChange={(e)=>{
                        setAge(e.target.value);
                    }}
                    />
                </div>
                <br/>

                <div class="form-group">
                    <label for="exampleInputPassword1">Graduation Year</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"
                    onChange={(e)=>{
                        set_grat_year(e.target.value);
                    }}
                    />
                </div>
                <br/>

               


                <button type="submit" class="btn btn-primary">Submit</button>
            </div>
                
        </form>
        </div>

    );
}