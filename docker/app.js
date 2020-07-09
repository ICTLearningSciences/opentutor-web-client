"use strict";
const express = require("express");
const path = require("path");
const app = express();
const http = require("http");
const cors = require("cors");
var server = http.createServer(app);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());
app.use("/", express.static(path.join(__dirname, "public", "grading")));
const port = process.env.NODE_PORT || 3000;
server.listen(port, function() {
  console.log(`node listening on port ${port}`);
});
module.exports = app;
