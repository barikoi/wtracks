var path = require("path");
var express = require("express");

var app = express();

var staticPath = path.join(__dirname, "/public");
app.use(express.static(staticPath));

app.listen(3001, () => console.log("Server has started in 3001"));
