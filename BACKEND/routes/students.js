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

//https://
router.route("/update/:id").put(async (req,res) => {
    let userId=req.params.id;
    const {name, age,grat_year}=req.body;

    const updateStudent={
        name,
        age,
        grat_year
    }

    const update =await Student.findByIdAndUpdate(userId,updateStudent)
    .then(()=>{
        res.status(200).send({status:"update successful !",user: update})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"update failed due to error! error : ",err:err.massage})
    })

    
})


module.exports=router;
