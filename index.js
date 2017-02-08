// Load express and path
var express = require("express");
var path = require("path");

// Create instance of express app
var appExpress = express();

/*
var port = parseInt(process.argv[2]) || 3000;

var port=3000;

if (process.argv[2]) 
    port=parseInt(process.argv[2]);

console.log("port: %d, type: %s", port, typeof port);
*/

// var port=(parseInt(process.argv[2]) || parseInt(process.env.APP_PORT) || 3000);

//console.log(">> port: %d, type: %s", process.env.APP_PORT, typeof process.env.APP_PORT);
// process.env.APP_PORT APP_PORT: defined in environment variables
//console.log(">> port: %d, type: %s", process.env.APP_PORT, typeof process.env.APP_PORT);
// console.log(">> port: %d, type: %s", port, typeof port);

// Configure port
//appExpress.set("port", 
//    parseInt(process.argv[2]) || process.env.APP_PORT|| 3000);

// Define routes
appExpress.use(express.static(path.join(__dirname,"public")));
// appExpress.use("/images", express.static(path.join(__dirname,"public")); // Remap

app.use(function(req,resp) {
    resp.type("text/html"); // Representation of resource
    resp.send("<h1>File not found. </h1><p>The current time is " + new Date() + "</p>");
});

appExpress.set("port",parseInt(process.argv[2]) || parseInt(process.env.APP_PORT) || 3000);

appExpress.listen(appExpress.get("port"), function() {
    console.info("Application is listening on port " + appExpress.get("port"));
});


