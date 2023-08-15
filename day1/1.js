
const {add,mul}= require("./sum");


// console.log(add(2,3))
console.log(mul(2,3));
const  os= require("os")
console.log(os.version);


const fs= require("fs");
const data=fs.readFileSync("./sum.js",{ encoding :"utf-8"})

console.log(data);