const express = require("express")
const router = new express.Router();
const Student = require("../models/students");
// 2: we need to describe the router

router.post("/students",async(req,res)=>{
    try{
    const User = new Student(req.body);
    const creatUser =await User.save();
    res.status(201).send(createUser);
    }catch(err){res.status(400).send(err);}
})

router.get("/students",async(req,res)=>{
    try{
        const getStudent =await Student.find() 
        res.status(200).send(getStudent);
    }
    catch(err){res.status(400).send(err);}
})

router.get("/students/:id",async(req,res)=>{
    try {
        const _id = req.params.id;
       const getStudentbyID = await Student.findById(_id);
       if(!getStudentbyID){
          return res.status(40).send();
       }else{
           res.status(400).send(getStudentbyID);
       }
    }
    catch (err)
    {
        res.status(404).send(err);
    }
})

router.patch("/students/:id",async(req,res)=>{
    try{
        const _id =req.params.id;
        const updateStudents = await Student.findByIdAndUpdate(_id,req.body,{
          new:true
      });
      res.status(201).send(updateStudents);
    }
    catch(err){
        res.status(404).send(err);
    }
})

router.delete("/students/:id",async(req,res)=>{
    try{
    const deleteStudent = await Student.findByIdAndDelete(req.params.id);
    console.log(req.params.id);
    res.send(deleteStudent);
}
    catch(err){
        res.status(500).send(err);
    }
})

module.exports = router;