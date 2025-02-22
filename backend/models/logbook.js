const mongoose = require("mongoose");

const LogbookSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: { type: String, required: true },
    description: { type: String },
    date: { type: Date, default: Date.now },
    category: {
      type: String,
      enum: ["Work", "Study", "Personal", "Other"],
      default: "Other",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Logbook", LogbookSchema);
