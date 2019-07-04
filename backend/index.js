const express = require("express");
const app = express();
const cors = require("cors");
const fetch = require("node-fetch");

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

app.get("/", (req, res) => {
  res.send("Welcome !!!");
});

app.get("/products/items", (req, res) => {
  const category = req.query.category;
  console.log("Category: ", category);
  fetch("http://localhost:4080/" + category + ".json")
    .then(res => {
      return res.json();
    })
    .then(body => {
      res.send(JSON.stringify(body));
    });
});

app.get("/products/categories", (req, res) => {
  fetch("http://localhost:4080/categories.json")
    .then(res => {
      return res.json();
    })
    .then(body => {
      res.send(JSON.stringify(body));
    });
});

app.listen(666, () => console.log("Listening on port 666"));
