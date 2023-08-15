
const express = require("express");
const router = express.Router();

const { getAllTodo, postCreateTodo, putUpdateTodo,deleteTodo }= require("../controllers/todo")
// get
router.get("/", getAllTodo);

//post
router.post("/", postCreateTodo);

// update

router.put("/:id", putUpdateTodo);


// delete

router.delete("/:id", deleteTodo)

module.exports= router;