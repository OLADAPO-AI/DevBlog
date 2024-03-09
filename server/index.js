require("dotenv").config();
require("express-async-errors");

const express = require("express");
const app = express();
const connectDB = require("./connection/connectDB");
const cors = require("cors");
const router = require("./controller/mainRoute");
// error handler
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

//middleware
app.use(cors());
app.use(express.json());
app.use("/api/v1", router);
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;
const Start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, console.log(`app is running on port ${port}`));
  } catch (error) {}
};

Start();
