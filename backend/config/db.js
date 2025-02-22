const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    console.log("Connecting to database........");
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Database connection established");
  } catch (err) {
    console.error("Database Connection Error:", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
