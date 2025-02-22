const express = require("express");
const protect = require("../middlewares/authMiddleware");
const {
  getLogs,
  createLog,
  updateLog,
  deleteLog,
} = require("../controllers/logbookController");
const validateLogbook = require("../middlewares/validationMiddleware");

const router = express.Router();
router.get("/", protect, getLogs);
router.post("/", protect, validateLogbook, createLog);
router.put("/:id", protect, validateLogbook, updateLog);
router.delete("/:id", protect, deleteLog);

module.exports = router;
