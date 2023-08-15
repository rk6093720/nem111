const {add,mul,sub,div,  cal, cal1,cal2, result}= require("./calc");


console.log("add:",add(2,1));
console.log("sub:",sub(4,1));
console.log("mul:",mul(2,3));
console.log("div",div(4,2));
console.log("sin",Math.floor(cal(0).toFixed(2)))
console.log("cos",Math.floor(cal1(0).toFixed(2)))
console.log("tan",Math.floor(cal2(0).toFixed(2)));
console.log("random",Math.floor(result(4,3)));