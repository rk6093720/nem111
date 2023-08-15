// In models, we are doing mongoose schema

const mongoose = require("mongoose");


const TodoSchema = new mongoose.Schema({
   title : {
    type: String,
    required:true
   },
   description:{
        type: String,
        required:true
   }
});

const Todo = mongoose.model("todo", TodoSchema);

module.exports=Todo