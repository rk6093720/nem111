
const mongoose = require("mongoose");

const db = process.env.todo;


const connectdb = async()=>{
    try {
     await   mongoose.connect(db,{
            useNewUrlParser: true,
               useUnifiedTopology: true,
   })
   console.log("MONGODB is Connected");
    } catch (error) {
        console.log(error);
    }
}



module.exports= connectdb;