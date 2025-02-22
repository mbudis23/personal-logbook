const express = require("express");
const connectDB = require("./config/db");

require("dotenv").config();

connectDB();

const app = express();
app.use(express.json());

app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`)
);
