const { response } = require("express");
const mongoose = require("mongoose");

const connectDB = (url) => {
  return mongoose
    .connect(url)
    .then((response) => console.log("connected to DB successful"));
};

module.exports = connectDB;
