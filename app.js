// Basic Lib Import
const express = require("express");
const router = require("./routes/api");
const app = new express();
const bodyParser = require("body-parser");

// Security Middleware Lib Import
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const hpp = require("hpp");
const cors = require("cors");

// Database Lib Import
const mongoose = require("mongoose");
const path = require("path");
app.use(express.static("client/build"));
// Security Middleware Implement
app.use(cors());
app.use(helmet());
app.use(mongoSanitize());
app.use(xss());
app.use(hpp());

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb" }));

// Body Parser Implement
app.use(bodyParser.json());

// Request Rate Limit
const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 3000 });
app.use(limiter);

// Mongo DB Database Connection
let URI = "mongodb://localhost:27017/inventory";
mongoose.connect(URI, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Database Connected");
  }
});

// Routing Implement
app.use("/api", router);

// Undefined Route Implement
app.get("*", function (req, res) {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

module.exports = app;
