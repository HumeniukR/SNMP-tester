var express = require("express");
var bodyParser = require("body-parser");
var snmp = require ("./script.js");
var app = express();
app.disable('x-powered-by');
 
var urlencodedParser = bodyParser.urlencoded({extended: false});
 
app.use(express.static(__dirname + "/public"));
 
app.post("/index", urlencodedParser, function (request, response) {
    if(!request.body) {
    	return response.sendStatus(400);
    }
    console.log('before');
    console.log(request.body);
    console.log('after');
    var res = snmp.getOutput(request.body.ip, request.body.community, request.body.oid);
    response.send(res);
  //response.send(`${request.body.ip} - ${request.body.community} - ${request.body.oid}`);
});
 
// app.get("/", function(request, response){
     
//     response.send("<h1>Главная страница</h1>");
// });

app.listen(3000, function() {
  console.log('Server running at port:3000');
});