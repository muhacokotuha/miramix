const express = require("express");
const app = express();
const cors = require("cors");
const fetch = require("node-fetch");

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

app.get("/", (req, res) => {
  res.send("Welcome !!!");
});

app.get("/products/bits", (req, res) => {
  fetch("http://localhost:4080/data.json")
    .then(res => {
      return res.json();
    })
    .then(body => {
      res.send(JSON.stringify(body));
    });
});

app.listen(666, () => console.log("Listening on port 666"));
