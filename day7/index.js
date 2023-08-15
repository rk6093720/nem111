

const express = require("express")
const {connection, MovieModel} = require("./db")
const app = express();

app.use(express.json())
app.get("/",(req,res)=>{
    res.send("Welcome to homepage")
})
app.get("/about",(req,res)=>{
    res.send("Welcome to about")
})
app.get("/movie", async (req,res)=>{
      const results = await MovieModel.find()
     res.send(results)
})

//post - taking from the client data

app.post("/addmovie", async (req,res)=>{
      const data = req.body;
      console.log(req.body);
    //  const student= await  StudentModel.insertMany([data])
    const movie = await MovieModel(data)
     await movie.save()
      res.send(movie)
})
// app.get()
app.get("/movie/:id", async(req,res)=>{
    
    try {
        const {id} = req.params;
        const updates= req.body;
        // const options={new : true}
        const movie = await MovieModel.findById(id,updates);
    
        res.send(movie);

    } catch (error) {
        res.status(404).send(error)
    }
})
app.patch("/movie/:id", async(req,res)=>{
    let {name,image, year,Language}= req.body;
    const { id}= req.params;
    let movie =await MovieModel.findOneAndUpdate({
        id:id,
        // userId:userId
    },
    {
        name,image,year,Language
    }
    );
    if(movie){
        res.status(200).send({ message:"ok", movie})
    }
    else{
        res.status(404).send({ message:"error"})
    }
    // res.send(movie);
    // res.send("updated")
})

app.delete("/movie/:id", async(req,res)=>{
    const {id}= req.params;
    let movie = await MovieModel.findOneAndDelete({
        id:id
        // userId:req.body.userId
    });
    if(movie){
        res.status(200).send("deleted")
    }else{
        res.status(404).send("couldn't be deleted")
    }
  
})

app.get("/Movie/:id", async(req,res)=>{
    const {id}= req.params;
    const data = await MovieModel.findOne({
        id:id,
        // userId:req.body.userId
    })
    if(data){
        res.status(200).send(data);
    }else{
      res.status(404).send("Not-Found")
    }
})
app.listen(8001, async () => {
    try {
         await connection
    console.log('Connected to DB Successfully');
    } catch (error) {
        console.log("Error");
        console.log(error);
        
    }
    console.log("Listening att 8080");
});


















// const express = require("express")
// const {connection, StudentModel} = require("./db")
// const app = express();

// app.use(express.json())
// app.get("/",(req,res)=>{
//     res.send("Welcome to homepage")
// })
// app.get("/about",(req,res)=>{
//     res.send("Welcome to about")
// })
// app.get("/students", async (req,res)=>{
//       const results = await StudentModel.find()
//      res.send(results)
// })

// //post - taking from the client data

// app.post("/addstudents1", async (req,res)=>{
//       const data = req.body;
//     //   console.log(data);
//     //  const student= await  StudentModel.insertMany([data])
//     const student = await StudentModel(data)
//      await student.save()
//       res.send(student)
// })

// app.listen(8080, async () => {
//     try {
//          await connection
//     console.log('Connected to DB Successfully');
//     } catch (error) {
//         console.log("Error");
//         console.log(error);
        
//     }
//     console.log("Listening att 8080");
// });




















// const mongoose = require("mongoose");// connect to db


// const main = async ()=>{
//     try {
//        const connection = await mongoose.connect(" mongodb://127.0.0.1:27017/nem111")
//        const result = await StudentModel.find();
//        console.log(result);
//        connection.disconnect(); 
//     } catch (error) {
//         console.log(err);
//     }
// }
// main();

// const StudentModel = mongoose.model("student", mongoose.Schema({
//        name:String,
//        age:Number,
//        course:String,
// }))

