// const express=require('express');
// const mongoose=require('mongoose');
// const bodyParser=require('body-parser');
// const cors=require('cors');
// const dotenv=require('dotenv');
// const app=express();
// require(dotenv).config();

// const PORT =process.env.PORT || 8074;  // available port  or|| 8070 port

// app.use(cors());
// app.use(bodyParser.json());

// const URL=process.env.MONGODB_URL;

// mongoose.connect(URL,{
//     useCreateIndex:true,
//     useNewUrlParser:true,
//     useUnifiedTopology:true,
//     useFindAndModify:true
// });

// const connection=mongoose.connection;
// connection.once("open",()=>{
//     console.log("MongoDB connection Success!");
// });

// app.listen(PORT, ()=>{
//     console.log(`Server is up and running on port number :`+PORT);
// });




const express=require("express");
const mongoose=require("mongoose");
const bodyParser=require("body-parser");
const cors=require("cors");
require("dotenv").config()
const app=express();

const PORT=process.env.PORT ||  8070;

app.use(cors());
app.use(bodyParser.json());

const URL=process.env.MONGODB_URL;


mongoose.connect(URL,{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false
    

});

const connection=mongoose.connection;
connection.once("open",()=>{
    console.log("Mongodb Connection success!");

})

const StudentRouter=require("./routes/students.js");
///here use the express
//http://localhost:8070/student        fronend eke indala backend call karanne mehemai
app.use("/student",StudentRouter);

app.listen(PORT,()=>{
    console.log('Server is up and running on port number: '+PORT);
})


///// "cons": "0.0.2",
