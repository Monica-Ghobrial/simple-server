//var http = require("http");
//const request = require('request');
var bodyparser= require('body-parser')
var nodemon=require('nodemon')

const express = require('express')
const app = express()
const port = process.env.PORT || 8081

var jsonParser = bodyparser.json()

app.get('/', (req, res) => res.send('HEY!!!'))

//app

app.post('/head', function(req,res){
    res.send(req.headers)
    console.log(req.headers)
})
app.post('/', jsonParser, function(req,res){
    //res.write(req.headers)
    res.send(req.body)
    console.log(req.body)
    
   

    
} )

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))


//var server= http.createServer(function (request, response) {
   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   //response.writeHead(200, {'Content-Type': 'text/plain'});
   
   // Send the response body as "Hello World"
  // response.end('Hello World\n');
//}).listen(8081);

// Console will print the message
//console.log('Server running at http://127.0.0.1:8081/');

//server.post('/', function(req,res){
//    console.log(req.body)
//} )

