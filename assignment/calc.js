const add=(a,b) => a+b
const sub=(a,b) => a-b
const mul=(a,b) => a*b
const div=(a,b) => a/b;

function cal(degrees){
    return Math.sin((degrees*Math.PI)/180)
}

function cal1(degrees){
    return Math.cos((degrees*Math.PI)/180)
}

function cal2(degrees){
    return Math.tan((degrees*Math.PI)/180)
}

function result(max,min){
    const result = Math.random()*(max - min) + min;
    return result;
}


module.exports= {add,sub,mul,div,cal,cal1,cal2, result}