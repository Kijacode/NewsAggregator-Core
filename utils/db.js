
// const dotenv = require("dotenv");
// dotenv.config();

const mongoose = require("mongoose");
const db_config = require("../config/development");
mongoose.set('useFindAndModify', false);




console.log("db is here");
const con = mongoose
  .connect(db_config.db_url, { userNewUrlParser: true }, () =>
    console.log("connect to db")
  )
  .then(async () => {
    await console.log("Database havebeing connected");
  })
  .catch(err => {
    console.log("Unable to connect to MongoDb");
    console.log(err);
  });

module.exports = con;