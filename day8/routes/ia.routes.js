const {Router }= require("express");
const { IA } = require("../Modals/IA.modal");

const iaRouter = Router()


iaRouter.get("/", async(req,res)=>{
    const iadata = await IA.find()
    res.send(iadata);
})

module.exports={
    iaRouter
}