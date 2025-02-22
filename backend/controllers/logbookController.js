const Logbook = require("../models/logbook");

exports.getLogs = async (req, res) => {
  const logs = await Logbook.find({
    userId: req.user.id,
  }).sort({
    date: -1,
  });
  res.status(200).json(logs);
};

exports.createLog = async (req, res) => {
  const { title, description, category, date } = req.body;
  const log = await Logbook.create({
    userId: req.user.id,
    title,
    description,
    category,
    date,
  });
  res.status(201).json(log);
};

exports.updateLog = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, date } = req.body;

    const updateData = { title, description, category, date };

    const existingLog = await Logbook.findById(id);
    if (!existingLog) {
      return res.status(404).json({ message: "Log not found" });
    }

    const updatedLog = await Logbook.findByIdAndUpdate(id, updateData, {
      new: true,
      runValidators: true,
    });

    res.status(200).json(updatedLog);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

exports.deleteLog = async (req, res) => {
  await Logbook.findByIdAndDelete(req.params.id);
  res.status(201).json({ message: "Log deleted" });
};
