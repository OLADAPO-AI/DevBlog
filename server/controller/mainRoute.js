const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");

const { createPost, getPost } = require("./routeLink/post");
const { login, register } = require("./routeLink/auth");

// Multer configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "image"); // Ensure 'image' directory exists
  },
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "_" + Date.now() + path.extname(file.originalname)
    );
  },
});
const upload = multer({ storage: storage });
// Routes
router.post("/post", upload.single("file"), createPost); // Assuming the file field name is 'file'
router.get("/post", getPost);
router.post("/register", register);
router.post("/login", login);

module.exports = router;
