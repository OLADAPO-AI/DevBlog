const BlogPost = require("../../model/blogPost");
const { StatusCodes } = require("http-status-codes");

const createPost = async (req, res) => {
  try {
    // Extracting data from the request body
    const { title, description } = req.body;
    const image = req.file.filename;

    // Creating a new blog post
    const postData = await BlogPost.create({
      title: title,
      description: description,
      image: image,
    });

    // Sending the response
    res.status(StatusCodes.OK).json(postData);
  } catch (error) {
    // Handling errors
    console.error(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: "Failed to create post" });
  }
};

const getPost = async (req, res) => {
  try {
    // Fetching all blog posts
    const data = await BlogPost.find();

    // Sending the response
    res.status(StatusCodes.OK).json({ data });
  } catch (error) {
    // Handling errors
    console.error(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: "Failed to fetch posts" });
  }
};

module.exports = { createPost, getPost };
