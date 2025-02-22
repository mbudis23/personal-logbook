const express = require("express");
const connectDB = require("./config/db");
const helmet = require("helmet");
const compression = require("compression");
const cors = require("cors");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");

const authRoutes = require("./routes/authRoutes");

require("dotenv").config();

const app = express();
app.use(express.json());
app.use(helmet());
app.use(compression());
app.use(cors());
app.use(morgan("dev"));
app.use(cookieParser());

connectDB();

app.use("/auth", authRoutes);

app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`)
);
