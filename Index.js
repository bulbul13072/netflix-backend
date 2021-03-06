const express = require("express");
const app = express();
const mongoose = require("mongoose");
require('dotenv').config();

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("DB Connection Successfull"))
  .catch((err) => {
    console.log(err);
  });

app.listen(8800, () => {
  console.log("Backend server is running!");
});
