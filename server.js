/* require("dotenv").config(); */

import dotenv from "dotenv";
import fetch from "node-fetch";
import express from "express";
dotenv.config();

/* const express = require("express"); */

const port = 3000;
const app = express();

app.use(express.json());
app.use("/", express.static("./client"));

app.get("/news", async (req, res) => {
  const url = "https://newsapi.org/v2/top-headlines?";
  const key = process.env.API_KEY;
  var api = url + "language=en&" + "apiKey=" + key;
  const response = fetch(api);
  const data = await (await response).json();
  res.json(data);
});

app.get("/news/:data", async (req, res) => {
  const url = "https://newsapi.org/v2/top-headlines?";
  const key = process.env.API_KEY;
  var api =
    req.params.data == ""
      ? url + "language=en&" + "apiKey=" + key
      : url + `q=${req.params.data}&` + "language=en&" + "apiKey=" + key;

  const response = await fetch(api);
  const data = await response.json();
  res.json(data);
});

app.listen(port, () => {
  console.log("App is running on port: " + port);
});
