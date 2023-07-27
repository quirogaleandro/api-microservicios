const express = require("express");
const morgan = require("morgan");

const server = express();

server.use(express.json());
server.use(morgan("dev"));

server.use(require("./routes"));

server.use("*", (req, res) => {
  res.status(404).send("The page does not exist");
});

server.use((err, req, res, next) => {
  res.status(err.statusCode).send(err.message);
  console.log("err server " + err.statusCode);
});

module.exports = server;
