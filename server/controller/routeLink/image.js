const PostImage = require("../../model/blogImage");

const uploadImage = async (req, res) => {
  const bodyData = { image: req.file.filename };
  const postData = await PostImage.create(bodyData);
  res.json(postData);
};

const getImages = async (req, res) => {
  const images = await PostImage.find();
  res.json(images);
};

module.exports = { uploadImage, getImages };
