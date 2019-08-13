var express = require('express');

var app = express();

var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });

  var reservations = [
    {
      id: "Spidey",
      name: "Peter Parker",
      email: "peter_b_parker@esu.com",
      phone: "562-867-5309"
    }
  ];

  var waitList = [
    {
      id: "Not Supes",
      name: "Clark Kent",
      email: "kent.clark@dailyplanet.com",
      phone: "573-847-1111"
    }
  ];

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
  });