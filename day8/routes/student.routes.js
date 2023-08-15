const express =require("express");
const { Student } = require("../Modals/Student.modal");

const studentRouter = express.Router();


studentRouter.get("/" , async(req,res)=>{
    const studentdata = await Student.find()
   res.send(studentdata);
})

studentRouter.get("/:id", async (req,res)=>{
       console.log(req.params.name);
       const data = await Student.find({_id : req.params.id})
       res.send(data)
})

studentRouter.post("/addStudent", async(req,res)=>{
        const payload = req.body;
        if(payload.name==="Ironman"){
         await movie.insertMany([payload])
        }else{
            res.send("Enter a valid movie")
        }
})

module.exports={
    studentRouter
}