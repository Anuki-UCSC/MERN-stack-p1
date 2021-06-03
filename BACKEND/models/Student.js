const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const studentSchema = new Schema({

    name:{
        type:String,
        required: true
    },
    age:{
        type:Number,
        required:true
    },
    grat_year:{
        type:Number
    }
})


const Student=mongoose.model("Student",studentSchema);

module.exports=Student;
