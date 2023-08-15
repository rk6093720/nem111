const express = require("express");
const { connection}= require("./config/db")
// const {IA } = require("./Modals/IA.modal");
// const { Student}= require("./Modals/Student.modal")
const { studentRouter}=require("./routes/student.routes")
const { iaRouter }= require("./routes/ia.routes")
 const app = express();

app.use(express.json());

app.get("/", (req,res)=>{
    res.send("Api home page, try otther routes")
})

app.use("/students", studentRouter)

app.use("/ia", iaRouter)
app.listen(8080, async()=>{
    try {
        await connection
    console.log("Connectted at DB Successfully");
    } catch (e) {
        console.log("Error connecting to DB");
        console.log(e);
    }
    console.log("Listening at PORT 8080");
    
})