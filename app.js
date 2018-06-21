var request = require("request");
var express = require("express");
var app = express();
var getJSON = require("get-json");
var fs = require("fs");
var util = require("util");

var url = "http://www.dnd5eapi.co/api/monsters/"

app.set("view engine", "ejs");

app.get("/", function(req, res) {
  for(var i = 1; i <= 325; i++) {
    getJSON(url + i, function(err, res) {
      if(err) {
        console.log(err);
      } else {
        fs.appendFileSync("monsters.txt", util.inspect(res), 'utf-8');
      }
    });
  }
  res.render("index");
})

app.listen(process.env.PORT, process.env.IP, function() {

});
