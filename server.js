const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

// const path = require("path");
const app = express();
const PORT = process.env.PORT || 3001;
// var bodyParser = require("body-parser");


// var app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var db = require("./models");

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Send every request to the React app
// Define any API routes before this runs
app.use(routes);

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactmoviefinder", { useNewUrlParser: true });


app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});



module.exports = app;
