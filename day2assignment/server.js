
// part 1

const http = require("http");
const fs=require("fs");


// const server= http.createServer((req,res)=>{
//     console.log("welcome");
//     res.end("Hellow")
// })


const server = http.createServer((req, res) => {

    req.on('error', err => {
        console.error(err);
        // Handle error...
        res.statusCode = 400;
        res.end('400: Bad Request');
        return;
    });

    res.on('error', err => {
        console.error(err);
        // Handle error...
    });

    fs.readFile('./public' + req.url, (err, data) => {
        if (err) {
            if (req.url === '/' && req.method === 'GET') {
                res.end('Welcome Home');
            } else if (req.url === '/public' && req.method === 'GET') {
                res.end('show the content of public');

            } 
            else if(req.url === "/public/other" && req.method==="GET"){
                res.end("show content of other directory inside public")
            }
            
            else {
                res.statusCode = 404;
                res.end('404: File Not Found');
            }
        } else {
            // NOTE: The file name could be parsed to determine the
            // appropriate data type to return. This is just a quick
            // example.
            res.setHeader('Content-Type', 'application/octet-stream');
            res.end(data);
        }
    });

});

server.listen(8080, () => {
    console.log('Example app listening on port 8080!');
});

// server.listen(8000)


//part 2

// var http = require('http');

//create a server object:

 const server1=  http.createServer(function (req, res) {
 res.writeHead(200, {'Content-Type': 'text/html'}); // http header
var url = req.url;
 if(url ==='/'){
    res.write('<ul><li>strings yourself </li></ul>'); //write a response
    res.end(); //end the response
 }else if(url ==='/public'){
    res.write('<ul><li>public us page</li></ul>'); //write a response
    res.end(); //end the response
 }else if(url==='/api/public'){
    res.write('<ul><li>contents of public directory</li></ul>'); //write a response
    res.end(); //end the response
 }
 else{
    res.write('<h1>welcome<h1>')
    res.end();
 }
})

server1.listen(3000, function(){
 console.log("server start at port 3000"); //the server object listens on port 3000
});