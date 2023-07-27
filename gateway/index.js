const express = require("express");
const morgan = require("morgan");
const { createProxyMiddleware } = require("http-proxy-middleware");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(morgan("dev"));

const corsOptions = {
  origin: process.env.ALLOWED_ORIGIN,
  methods: "GET, POST, PUT, DELETE",
  allowedHeaders: "Origin, X-Requested-With, Content-Type, Accept",
};

app.use(cors(corsOptions));

app.use(
  "/characters",
  createProxyMiddleware({
    target: process.env.TARGET_CHARACTERS,
    changeOrigin: true,
  })
);

app.use(
  "/films",
  createProxyMiddleware({
    target: process.env.TARGET_FILMS,
    changeOrigin: true,
  })
);

app.use(
  "/planets",
  createProxyMiddleware({
    target: process.env.TARGET_PLANETS,
    changeOrigin: true,
  })
);

app.listen(process.env.PORT_GATEWAY, () => {
  console.log("Gateway on port ", process.env.PORT_GATEWAY);
});
