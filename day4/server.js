// const express =require("express");
// const multer = require("multer")
// const app = express()


// const fileStorageEngine = multer.diskStorage({
//     destination:(req,file,cb)=>{
//         cb(null,"./Images")
//     },
//     filename:(req,file,cb)=>{
//         cb(null, Date.now() + "..." + file.originalname)
//     }
// })

// const upload= multer({storage :fileStorageEngine})

 
// app.post("/profile",upload.single("image"),(req,res)=>{
//     console.log(req.file);
//     res.send(req.file)
// })

// app.listen(5000)

const express = require('express');
const formidable = require('formidable');

const app = express();

app.get('/', (req, res) => {
  res.send(`
    <h2>With <code>"express"</code> npm package</h2>
    <form action="/api/upload" enctype="multipart/form-data" method="post">
      <div>Text field title: <input type="text" name="title" /></div>
      <div>File: <input type="file" name="someExpressFiles" multiple="multiple" /></div>
      <input type="submit" value="Upload" />
    </form>
  `);
});

app.post('/api/upload', (req, res, next) => {
  const form = formidable({ multiples: true });

  form.parse(req, (err, fields, files) => {
    if (err) {
      next(err);
      return;
    }
    res.json({ fields, files });
  });
});

app.listen(3000, () => {
  console.log('Server listening on http://localhost:3000 ...');
});