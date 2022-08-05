const mongoose = require("mongoose");
const config = require('./index')

function connectToDb() {
  mongoose
    .connect(config.mongoUri)
    .then((connection) => {
      console.log("connected to database");
    })
    .catch((error) => {
      console.log(`unable to connect to database: ${error.message}`);
    });
}
module.exports = { connectToDb };
