const express = require("express");
require("./db/mongoose");
const userRouter = require("./routers/user");
const app = express();
require("dotenv").config();
const cors = require("cors");

const port = process.env.PORT || 5000;

app.use(cors());
app.all('/', function (req, res) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
});

app.use(express.json());
app.use(userRouter);

app.listen(port, () => {
  console.log("Server is up on port " + port);
});
