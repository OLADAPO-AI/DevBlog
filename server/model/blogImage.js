const mongoose = require("mongoose");

const BlogImage = mongoose.Schema({
  image: String,
});

module.exports = mongoose.model("BlogImage", BlogImage);
