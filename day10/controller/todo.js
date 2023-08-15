const Todo = require("../Modals/Todo.modal");

exports.getAllTodo = (req, res) => {
    Todo.find()
        .then((todo) => res.json(todo))
        .catch((err) =>
            res
                .status(404)
                .json({ message: "Todo not found", error: err.message })
        );
};

exports.postCreateTodo = (req, res) => {
    Todo.create(req.body)
        .then((data) => res.json({ message: "Todo added successfully", data }))
        .catch((err) =>
            res
                .status(400)
                .json({ message: "Failed to add todo", error: err.message })
        );
};

exports.putUpdateTodo = (req, res) => {
    Todo.findOneAndUpdate(req.params.id, req.body)
        .then((data) => res.json({ message: "updated successfully", data }))
        .catch((err) =>
            res.status(400).json({ message: "Failed to update todo", error: err.message })
        );
};

exports.deleteTodo = (req, res) => {
    
    Todo.findOneAndDelete(req.params.id, req.body)
        .then((data) =>
            res.json({ message: "todo deleted successfully", data })
        )
        .catch((err) =>
            res.status(404).json({ message: "todo not found", error: err.message })
        );
};



// const noteModel = require("../models/note");

// const createNote = async (req, res) =>{
    
//     const {title, description} = req.body;

//     const newNote = new noteModel({
//         title: title,
//         description : description,
//         userId : req.userId
//     });

//     try {
        
//         await newNote.save();
//         res.status(201).json(newNote);

//     } catch (error) {
//         console.log(error);
//         res.status(500).json({message: "Something went wrong"});
//     }
    
// }

// const updateNote = async (req, res) =>{
//     const id = req.params.id;
//     const {title, description} = req.body;

//     const newNote = {
//         title : title,
//         description: description,
//         userId : req.userId
//     }

//     try {
//         await noteModel.findByIdAndUpdate(id, newNote, {new : true});
//         res.status(200).json(newNote);
        
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({message: "Something went wrong"});
//     }

// }

// const deleteNote = async (req, res) =>{

//     const id = req.params.id;
//     try {
        
//         const note = await noteModel.findByIdAndRemove(id);
//         res.status(202).json(note);

//     } catch (error) {
//         console.log(error);
//         res.status(500).json({message: "Something went wrong"});
//     }
// }

// const getNotes = async (req, res) =>{
//     try {
        
//         const notes = await noteModel.find({userId : req.userId});
//         res.status(200).json(notes);

//     } catch (error) {
//         console.log(error);
//         res.status(500).json({message: "Something went wrong"});
//     }
// }

// module.exports = {
//     createNote,
//     updateNote,
//     deleteNote,
//     getNotes
// }