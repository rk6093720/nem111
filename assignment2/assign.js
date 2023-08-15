


const fs= require("fs");
const data= fs.readFileSync("./assign.js", { encoding :"utf-8"})
console.log(data);

// const fs= require("fs");
// const data1 = fs.appendFileSync("./assign.js" )
// console.log(data1);
// var fs = require('fs');

var data1 = "\nLearn Node.js with the help of well built Node.js Tutorial.";

// append data to file
fs.appendFile('sample.txt',data1, 'utf8',
	// callback function
	function(err) {		
   if(err){

   }
		// if no error
		console.log("Data is appended to file successfully.")
});
// var fs = require('fs');

// writeFile function with filename, content and callback function
fs.writeFile('newfile.txt', 'Learn Node FS module', function (err) {
  if (err) throw err;
  console.log('File is created successfully.');
});
fs.open('newfile_3.txt', 'w', function (err, file) {
  if (err) throw err;
  console.log('File is opened in write mode.');
});

// var fs = require('fs');

// delete file named 'sample.txt'
fs.unlink('sample.txt', function (err) {
	if (err) throw err;
	// if no error, file has been deleted successfully
	console.log('File deleted!');
});