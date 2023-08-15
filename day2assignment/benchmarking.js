const fs = require('fs');
const crypto = require('crypto');

fs.writeFileSync( "./benchmarking/benchmark.txt", crypto.randomBytes(2048).toString('base64') )
// This file would act as a constant for our next step which is to read the file. Here’s the code

// const fs = require('fs');

process.on('unhandledRejection', (err)=>{
 console.error(err);
})

function synchronous() {
 console.time("sync");
 fs.readFileSync("./test.txt")
 console.timeEnd("sync")
}

async function asynchronous() {
 console.time("async");
 let p0 = fs.promises.readFile("./test.txt");
 await Promise.all([p0])
 console.timeEnd("async")
}

synchronous()
asynchronous()
