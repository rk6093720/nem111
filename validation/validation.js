

const validation=(req,res,next)=>{
    const movies=req.body;
    console.log("validation",movies)
    if(typeof movies.id==="number" &&
    typeof movies.Name === "string" &&
    typeof movies.Rating === "number" &&
    typeof movies.Description === "string" &&
    typeof movies.Genre === "string" &&
    typeof movies.Cast === "string"){
        next()
    }
    else{
        res.status(401).send("check something wrong")
    }
}
module.exports=validation