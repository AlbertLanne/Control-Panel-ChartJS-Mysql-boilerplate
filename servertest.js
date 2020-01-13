var mysql = require('mysql');

var con = mysql.createConnection({
  host: "bfgvnm6ajhbocjxbjmly-mysql.services.clever-cloud.com",
  user: "uisomclwcgug5cj5",
  password: "58Eg8vzqeQ4Rx0zxjhFw",
  database: "bfgvnm6ajhbocjxbjmly"
});

con.connect(function(err) {
  if (err) throw err;
  //Select all customers and return the result object:
  con.query("SELECT * FROM `producttable`", function (err, result, fields) {
    if (err) throw err;
    console.log(result);

  });
});
