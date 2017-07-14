const express = require("express");
const bodyParser = require("body-parser");
const snmp = require("../snmp_connector")

const app = express();
const jsonParser = bodyParser.json();
var data = {};

app.use(express.static(__dirname + "/public"));

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.header('access-Control-Allow-Origin', '*');
  next();
});

app.use(function(req, res, next){
  //console.log(req.body + 'req.body');
  if (!req.body) return res.sendStatus(400);
  console.log(req.body + "___" + req.body.ip);
  data = {};
  data = snmp.getAgentAnswer(req.body.ip, req.body.community, req.body.oid);
  //data.text = 'sdfdsfdsfdsf sfsfsfs';
  //console.log(data.tree[50] + '_______________');
  console.log(data.a5);
  setTimeout(fun, 10000);
  function fun() {
    console.log(data.a5)
  }
  next();
});

app.post("/agent", jsonParser, function (req, res) {
  let promice = new Promice((resolve, rejected) => {});
  console.log(data.text + ' from post')
  // console.log(req.body);
  // if (!req.body) return res.sendStatus(400);
  // console.log(req.body + "___" + req.body.ip);
  // data = {};
  // data.text = snmp.getAgentAnswer(req.body.ip, req.body.community, req.body.oid);
  // //data.text = 'sdfdsfdsfdsf sfsfsfs';
  // console.log(data.text.tree[50] + '_______________');
  res.send(data);
});

module.exports = app;
