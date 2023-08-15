


const express=require("express");
const app=express();
const fs=require("fs");
const validation = require("./validation");
app.use(express.json());
const moviesdatapath=fs.readFileSync('./db.json',{encoding:'utf8'});
const moviesdata=JSON.parse(moviesdatapath)
console.log(moviesdata)
app.use(validation);
app.post("/movies",(req,res)=>{
    let body=req.body;
    moviesdata.movies.push(body)
    res.send("add movies successfully")
})
app.get("/",(req,res)=>{
    res.send("HOMEPAGE")
})

app.listen(8080)
