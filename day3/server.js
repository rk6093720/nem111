


const express = require("express");
const dns= require("dns")
const fs= require("fs")

const app = express();
// welcome to home page
app.use(express.json());

// app.get("/",(request, response)=>{
//      response.send("welcome to our server")

// })


// app.get("/profile",(request, response)=>{
//     response.send("profile page")
// })


// app.post("/upload",(req,res)=>{
//     fs.appendFileSync("./data.txt", JSON.stringify(req.body), {encoding:"utf-8"})
//     console.log(req.body);
//     res.send("thanks")
// })
// app.listen(8500,()=>{
//     console.log("listening");
// })
app.get("/", (req,res)=>{
    res.send("welcome the home page");
})

app.get("/todos", (req,res)=>{
    
   const data= fs.readFileSync("./db.json", {encoding:"utf-8"})
   const parsedData = JSON.parse(data);
   const todos = parsedData.todos
   console.log(todos);
    res.send( JSON.stringify(todos))
})

//    app.get("/todos/:id", (req,res)=>{
//        const { id}= req.params
//        req.send("here is your product" + id)
//    })


// put
// patch

app.post("/addtodos", (req,res)=>{
    // 1. access the product the client is sending
    // thunder client me jakar body me db.json wala part likhenege then url ko send karna hai tb data show hoga TERMINAL pe
    const product= JSON.stringify(req.body);
    // console.log(product);
    // 2. read the file
  
        const file=   fs.readFileSync("./db.json", { encoding:"utf-8"})
        let parsedFile= JSON.parse(file)
        //3. modify the todos in the file
       parsedFile.todos.push(req.body);
       console.log(parsedFile);
       // 4 stringify the file
       parsedFile= JSON.stringify(parsedFile)
       // 4.write the file back;
       fs.writeFileSync("./db.json",parsedFile, {encoding:"utf-8"})
       res.send("your product was added")

   })



app.put("/todos/:id",(req,res)=>{
    const file1= fs.readFileSync("./db.json",{encoding:"utf-8"} );
    let  {id}=req.params;
    let body= req.body;
     let parsedData=JSON.parse(file1);
      let index=parsedData.todos.findIndex((e)=>{
        return e.id === +id
      });
      if(index >=0)
      {
        let index1=parsedData.todos[index];
        index1.title= body.title;
        index1.id= +id;
        
        fs.writeFileSync("./db.json",JSON.stringify(parsedData), {encoding:"utf-8"})
      }
    res.send("update successfully")
})


app.delete("/todos/:id", (req,res)=>{
    const {id}=req.params;
    const data=fs.readFileSync("./db.json", {encoding:"utf-8"});
    let parsedData= JSON.parse(data);
    const newData = parsedData.todos.filter((e)=>{
        return e.id !== +id
    })
    parsedData.todos = newData;
    fs.writeFileSync("./db.json", JSON.stringify(parsedData), {encoding:"utf-8"});
    res.send("deleted successfully")
})

app.post("/getmeip",(req,res)=>{
    const {website_name}=req.body;
    console.log(website_name);
    dns.lookup(website_name,(err,address)=>{
        if(err){
            res.send("something went wrong")
        }
        res.send(address)
    })
})
app.listen(8080)

// method + routes
//get+ / - middleware