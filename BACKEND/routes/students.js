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

router.route("/").get((req,res)=>{
    Student.find().then((students)=>{
        res.json({existingStudent:students, success:true});
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
        res.status(200).send({status:"update successful !"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"update failed due to error! error : ",err:err.massage})
    })

    
})


router.route("/delete/:id").delete(async (req,res)=>{
    let userId=req.params.id;

    await Student.findByIdAndDelete(userId)
    .then(()=>{
        res.status(200).send({status:"Successfully deleted! "});
    }).catch((error)=>{
        res.status(500).send({status:"Error ocurred for deletion!"});
        console.log(error.massage);
    })
})


router.route("/get/:id").get(async (req,res)=>{
    let userId=req.params.id;

    const user =await Student.findById(userId)
    .then((student)=>{
        res.status(200).send({status:"Successfully fetched! ", studentData:student, success:true});
    }).catch(()=>{
        res.status(500).sent({status:"find by id not successful "});
    })
})


module.exports=router;
