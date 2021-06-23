// server/index.js
const path = require("path");

const express = require("express");

const PORT = process.env.PORT || 3001;

var cors = require("cors");

var app = express();

app.use(express.static(path.resolve(__dirname, "../client/build")));

app.use(cors());

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});
// All other GET requests not handled before will return our React app
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
