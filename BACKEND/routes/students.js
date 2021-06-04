const router=require("express").Router();

let Student =require("../models/Student");

//https://localhost:8070/student/add
router.route("/add").post((req,res)=>{
    const name=req.body.name;
    const age=Number(req.body.age);
    const grat_year=Number(req.body.grat_year);

    const newStudent= new Student({
        name,
        age,
        grat_year
    })

    newStudent.save().then(()=>{
        res.json("New Student Added !");
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/").get((students)=>{
    students.find().then((students)=>{
        res.json(students)
    }).catch((err)=>{
        console.log(err);
    })
})




module.exports=router;
