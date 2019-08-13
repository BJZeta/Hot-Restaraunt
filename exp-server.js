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
      routeName: "PeterParker",
      id: "Spidey",
      name: "Peter Parker",
      email: "peter_b_parker@esu.com",
      phone: "562-867-5309"
    }
  ];

  var waitList = [
    {
      routeName: "ClarkKent",
      id: "Not Supes",
      name: "Clark Kent",
      email: "kent.clark@dailyplanet.com",
      phone: "573-847-1111"
    }
  ];

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
  });

  app.get("/add", function(req, res) {
    res.sendFile(path.join(__dirname, "add.html"));
  });

  app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
  });

  app.get("/api/tables", function(req, res) {
    return res.json(reservations);
  });

  app.get("/api/waitinglist", function(req, res) {
    return res.json(waitList);
  });

  app.get("/api/tables/:table", function (req,res) {
    var chosen = req.params.table;
    for (var i=0; i < reservations.length;i++) {
      if(chosen === reservations[i].routeName) {
        return res.json(reservations[i]);
      }
    }

    return res.json(false);

  });