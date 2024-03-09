const mongoose = require("mongoose");

const BlogPostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please provide a title"],
    minLength: [5, "Title must be at least 5 characters long"],
  },
  description: {
    type: String,
    required: [true, "Please provide a description"],
    minLength: [10, "Description must be at least 10 characters long"],
  },
  date: { type: Date, default: Date.now },
  image: String,
});

module.exports = mongoose.model("BlogPost", BlogPostSchema);
