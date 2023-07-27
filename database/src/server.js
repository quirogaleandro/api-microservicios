const express = require("express");
const morgan = require("morgan");

const server = express();

server.use(express.json());
server.use(morgan("dev"));

server.use(require("./routes"));

server.use("*", (req, res) => {
  res.status(404).send("Not found");
});

server.use((err, req, res, next) => {
  if (err.name === "MongoServerError" && err.code === 11000) {
    res.status(err.statusCode || 409).send("The element already exists");
  } else {
    res.status(err.statusCode || 500).send(err.message);
  }
});

module.exports = server;
