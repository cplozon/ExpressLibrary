//setting up server file

var express = require('express');
var bodyParser = require('body-parser');
//var methodOverride = require('method-override');
//var exphbs = require('express-handlebars');
//var path = require('path');

var app = express();
var PORT = process.env.PORT || 8080;

// content handle data parsing

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: "application/vnd.api+json"}));


// static directory
app.use(express.static("app/public"));

// Routes

require("./app/routes/api-routes.js")(app);
//require("./app/routes/html-routes.js")(app);

// Starts server to listen
app.listen(PORT, function(){
    console.log("App listening on PORT "+ PORT);
});