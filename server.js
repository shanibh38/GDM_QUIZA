//Server class - responsible about initiate connections
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
var util = require('util')
var cors = require('cors');
app.use(cors());
var Users = require('./server/Users');
var jwt = require('jsonwebtoken');

/*
var mysql = require('mysql');
var con = mysql.createConnection({
    host: "quizagdm.coxqxrjsrdck.us-east-1.rds.amazonaws.com",
    port: "3306",
    user: "admin",
    password: "admingdma",
    database: "gdma"
  });
  /*
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });
  */
/*
 con.connect(function(err) {
   if (err) throw err;
   console.log("Connected!");
   var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
   con.query(sql, function (err, result) {
     if (err) throw err;
     console.log("Table created");
   });
 });
 /*
 con.connect(function(err) {
   if (err) throw err;
   console.log("Connected!");
 });
*/
/*
var mysql = require('mysql');
var con = mysql.createConnection({
    host: "quizagdm.coxqxrjsrdck.us-east-1.rds.amazonaws.com",
    port: "3306",
    user: "admin",
    password: "admingdma",
    database: "gdma"
  });


    con.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
      con.query("CREATE TABLE IF NOT EXISTS UsersA (userName varchar(10) PRIMARY KEY, age integer, gender varchar(7),education varchar(50), bonus varchar(5))", function (err, result) {
        if (err) throw err;
        console.log("Table created");
      });
      con.query("CREATE TABLE IF NOT EXISTS UsersC (userName varchar(10) PRIMARY KEY, age integer, gender varchar(7),education varchar(50), bonus varchar(5))", function (err, result) {
        if (err) throw err;
        console.log("Table created");
      });
      con.end();


    });
*/

const PORT = process.env.PORT || 3000;
var server = app.listen(PORT, function () {
  var host = server.address().address;
  console.log("Example app listening at https://%s:%s", host, PORT);
});

app.use(express.static(__dirname + '/client'));

app.use('/Users', Users);