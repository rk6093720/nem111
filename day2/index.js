//string.
// const http= require("http")
// //http is a module

// const server= http.createServer((req, res)=>{
//     if(req.url==="/posts"){
//         res.end("how are you post");
//     }

//     else{
//        return  res.end("welcome to our very new first server")
//     }
//          res.end("hello")
// })

// server.listen(5000)
// /posts -> "how are your post"

//array

// const http= require("http")
// //http is a module

// const server= http.createServer((req, res)=>{
//     if(req.url==="/posts"){
//         res.end(JSON.stringify([1,2,3,4,5]));
//     }
    
//     else{
//        return  res.end("welcome to our very new first server")
//     }
//          res.end("hello")
// })

// server.listen(5000)

// string -> array,object

// server - be built only with node.js? java etc
// JSON.parse -> 


// array of object
const http= require("http")
//http is a module
const fs=require("fs");
const server= http.createServer((req, res)=>{
    if(req.method==="GET"){
        if(req.url==="/posts"){
            console.log(req.method);
            const posts= fs.readFileSync("./posts.json", { encoding:"utf-8"})
            res.setHeader("content-type", "application/json")
            return res.end(JSON.stringify(posts));
        }
        else if(req.url === "/todos"){
            return res.end("mine todos are here ")

        }
        else if(req.url==="/posts2"){
            const readStream = fs.createReadStream("./posts.json",{
                encoding:"utf-8",
            });
            readStream.pipe(res)

        }
        else{
            return res.end("Invalid routes")
        }
    }
  
    
    else if(req.method==="POST"){
       if(req.url==="/uploaddata"){
        let str="";
           req.on("data", function(packet){
               str+= packet;
           })
          req.on(("end" , ()=>{

            fs.writeFileSync("./dummy.txt",str, { encoding:"utf-8"})
            res.end("we have got your data ")
          }))
       }
    }
       
})

server.listen(5000)