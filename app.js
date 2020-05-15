const express = require("express");

const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const db = require("./utils/db");
const blog = require("./src/Blog/BlogRoute");
 const job = require("./utils/AutomatedWorks/Local");

app.use(bodyParser.json({ limit: "50mb" }));
app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
    parameterLimit: 50000,
  })
);

job.start();
// app.use();
db;

app.use(express.json());

app.use(cors());

app.use("/v1/blog", blog);

app.use((err, req, res, next) => {
  if (err) {
    console.log(err);
  }
});

module.exports = app;
