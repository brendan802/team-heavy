require("dotenv").config();
const express = require("express");
const request = require("request");
const app = express();
const path = require("path");
const port = process.env.PORT || 8000;

app.use(express.static("./public"));

app.get("/", function (req, res, next) {
  request(
    "https://omeka.bigheavyworld.com/api/items=7",

    function (error, response, body) {
      if (!error && response.statusCode === 200) {
        console.log(body);
        res.json(body);
      } else {
        res.json(error);
      }
    }
  );
});
app.listen(port, () => {
  console.log("running on port: " + port);
});
