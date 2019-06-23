const express = require("express");
const app = express();

app.use("/", (req, res) => {
  res.send("Test");
});

app.listen(666, () => console.log("Listening on port 666"));
