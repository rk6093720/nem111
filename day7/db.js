

// const mongoose= require("mongoose")

// const connection=  mongoose.connect("mongodb://127.0.0.1:27017/web23")

// const studentSchema = mongoose.Schema({
//     name:String,
//     age:Number,
//     course :String,
    
// })

// const StudentModel = mongoose.model("student", studentSchema);

// module.exports = {
//     connection,
//     StudentModel
// }


const mongoose = require("mongoose");
const connection=  mongoose.connect("mongodb://127.0.0.1:27017/movielife",
{
useNewUrlParser: true,
// useCreateIndex: true, 
useUnifiedTopology: true,
// useFindAndModify:false
}
)
.then(() => console.log('MongoDB Connected...'))
.catch((err) => console.log(err))

const movieSchema= mongoose.Schema({
    name:String,
    image:String,
    year:String,
    Language:String
})

const MovieModel = mongoose.model("movielife", movieSchema);

module.exports = {
        connection,
        MovieModel
    }