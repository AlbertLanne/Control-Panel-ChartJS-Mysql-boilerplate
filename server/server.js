const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Incoming cool data here" });

  console.log("Successfully connected to the database.");

});

// set port, listen for requests
app.listen(4000, () => {
  console.log("Server is running on port 4000.");
});
