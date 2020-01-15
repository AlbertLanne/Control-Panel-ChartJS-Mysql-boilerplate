const express = require('express');


var mysql = require("mysql");
//Database connection
app.use(function(req, res, next){
  res.locals.connection = mysql.createConnection({
    host: "bfgvnm6ajhbocjxbjmly-mysql.services.clever-cloud.com",
    user: "uisomclwcgug5cj5",
    password: "58Eg8vzqeQ4Rx0zxjhFw",
    database: "bfgvnm6ajhbocjxbjmly"
  });
  res.locals.connection.connect();
  next();
});
// app.use('/',index);
app.use('/producttable, producttable')
