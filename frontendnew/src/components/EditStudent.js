import React, { Component } from "react";
import axios from 'axios';

export default class EditStudent extends Component{
    constructor(props){
        super(props);

        this.state={
            name:'',
            age:'',
            grat_year:''
        }
    }

    handleInputChange=(e)=>{
        const {name, value}=e.target;

        this.setState({
            ...this.state,
            [name]:value
        })
    }


    componentDidMount(){
       this.retrieveStudentDetails();

    }

    retrieveStudentDetails(){
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

 

    editStudentDetails =(e)=>{

        e.preventDefault();
        const id=this.props.match.params.id;
        const {name, age,grat_year}=this.state;

        const data={
                name:name,
                age:age,
                grat_year:grat_year

            }

            console.log(data);

        axios.put(`http://localhost:8070/student/edit/${id}`, data).then(res=>{
           if(res.data.success){
           
            this.setState({
                name:'',
                age:'',
                grat_year:''
            })

           }
        }).catch((err)=>{
            alert(err)
        })
    }
        
    
    
    render(){

        
        return(
            <div>
                <h1>Update Details</h1>
        <form>
            <div className="container">
            <div class="form-group">
                    <label for="exampleInputEmail1">Name</label>
                    <input type="text" name="name" class="form-control" id="exampleInputEmail1"  
                    value={this.state.name}
                     onChange={this.handleInputChange}
                    />
                </div>
                <br/>
                <div class="form-group">
                    <label for="exampleInputPassword1">Age</label>
                    <input type="text" name="age" class="form-control" id="exampleInputPassword1" 
                    value={this.state.age}
                    onChange={this.handleInputChange}
                    />
                </div>
                <br/>

                <div class="form-group">
                    <label for="exampleInputPassword1">Graduation Year</label>
                    <input type="text" name="grat_year" class="form-control" id="exampleInputPassword1" 
                    value={this.state.grat_year}
                    onChange={this.handleInputChange}
                    />
                </div>
                <br/>

               


                <button type="submit" className="btn btn-primary" onClick={this.editStudentDetails} >Submit</button>
            </div>
                
        </form>
        </div>
        )
    }
}



// import React, { Component } from 'react';
// import axios from 'axios';

// export default class EditPost extends Component {


//     constructor(props)
//     {
//         super(props);
//         this.state={
//             topic:"",
//             description:"",
//             postCategory:""
//         }
//     }


//     handleInputChange=(e)=>{
//         const {name,value}=e.target;

//         this.setState({
//             ...this.state,
//             [name]:value
//         })
//     }

//     onSubmit=(e)=>{
//         e.preventDefault();

//         const id=this.props.match.params.id;

//         const {topic,description,postCategory}=this.state;

//         const data={
//             topic:topic,
//             description:description,
//             postCategory:postCategory
//         }

//         axios.put("/post/update/"+id,data).then(
//             (res)=>{
//                 if(res.data.success)
//                 {
//                     alert("Post updated Successfully")
//                     this.setState(
//                        { topic:"",
//                     description:"",
//                     postCategory:""}

//                     )
//                 }
//             }
//         )
//         console.log(data);
//     }

//     componentDidMount()
//     {

//         const id=this.props.match.params.id;

//         axios.get('/post/'+id).then((res)=>{

//            if(res.data.success)
//            {
//                this.setState({
//                   topic:res.data.post.topic,
//                   description:res.data.post.description,
//                   postCategory:res.data.post.postCategory
//                });
//                console.log(this.state.post);
//            }
//         })

//     }


//     render() {
//         return(
//             <div className="container">
//                 <form className="needs-validation" noValidate>
//                     <div className="form-group" style={{marginTop:'15px'}}>
//                         <label >Enter Topic</label>
//                         <input type="text" className="form-control" name="topic"  placeholder="Enter Topic"
//                         value={this.state.topic}
//                             onChange={this.handleInputChange
    
//                                 //setName(e.target.value);
//                             }
//                         />
                        
//                     </div>
    
//                     <div className="form-group">
//                         <label for="age">Enter Description</label>
//                         <input type="text" className="form-control" name="description"  placeholder="Enter Description"
//                         value={this.state.description}
//                             onChange={this.handleInputChange}
//                         />
                        
//                     </div>
    
//                     <div className="form-group">
//                         <label for="gender">Enter Post Category</label>
//                         <input type="text" className="form-control" name="postCategory"  placeholder="Enter Post Category" 
//                         value={this.state.postCategory}
//                         onChange={
//                             this.handleInputChange
//                         }/>
                        
//                     </div>
                   
//                     <button type="submit" class="btn btn-primary" style={{marginTop:20}}
//                     onClick={this.onSubmit}
//                     >
//                     <i className='far fa-check-square'></i>
//                     &nbsp;Update</button>
//                 </form>
//             </div>
//         );
//     }

// }
