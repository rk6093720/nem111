// const express = require('express');
// const morgan = require('morgan');

// const app = express();
// app.use(morgan('tiny'));
// morgan(':method :url :status :res[content-length] - :response-time ms');
// morgan.token('host', function(req, res) {
//     return req.hostname;
// });
// app.use(morgan(':method :host :status :param[id] :res[content-length] - :response-time ms'));


// morgan.token('type', function (req, res) { return req.headers['content-type'] })
// // morgan.token('param', function(req, res, param) {
// //     console.log(req.params[param]);
// //     return req.params[param];
// // });
var express = require('express')
var morgan = require('morgan')
 
var app = express()
 
app.use(morgan('combined'))
 
app.get('/', function (req, res) {
  res.send('hello, world!')
})
app.listen(3000, () => {
    console.debug('App listening on :3000');
});

