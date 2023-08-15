require("dotenv").config();

const express = require("express");
const cors = require("cors")

const connection = require("./config/db")
const app = express();

const todo = require("./routes/Todo.route")
const user = require("./routes/User.route")
 connection();
 app.use(cors({ origin:true, credentials:true}))
app.use(express.json({ extended: false}));

app.get("/", (req,res)=>{
    res.send("Server is running")
})

app.use("/api/todo", todo);
app.use("/api/todo/user",user)
const PORT = process.env.PORT || 8000;

app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`);
})


































// const express = require("express");
// const { connection}= require("./config/db");
// const { UserModel}= require("./Modals/User.modal")
// const app = express()

// app.use(express.json());//as use of middleware

// app.get("/",(req,res)=>{
//    res.send("home page")
// })
// app.get("/dashboard",(req,res)=>{
//     const {token}= req.query;
//     if(Number(token)=== 54321)
//     {
//         res.send(" Some important data");
//     }else{
//         res.send("Please Login");
//     }
    
// })

// // interview 

// app.post('/signup', async (req, res) => {
//     const {email, password}= req.body;
//     const new_user = new UserModel({
//         email,
//         password
//     })
//     await new_user.save();
//     res.send("sign up successfully")
// });

// app.post('/login', async(req,res)=>{
//     const {email, password}= req.body;
//     const result = await UserModel.find({email,password})
//     if(result){
//         res.send({msg:"Login Successfully", "token":54321})
//     }else{
//         res.send("LOGIN Failed")
//     }
// })


// app.listen(3000, async() => {
//     try {
//         await connection;
//         console.log("Connected to DB successfully");
//     } catch (error) {
//         console.log("Error connecting to DB");
//         console.log(error);
//     }
//     console.log('App listening on port 3000!');
// });


// // jwt - json web token