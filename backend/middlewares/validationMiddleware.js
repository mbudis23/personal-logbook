const { body, validationResult } = require("express-validator");

const validateLogbook = [
  body("title").notEmpty().withMessage("Title cannot be empty"),
  //   body("description").notEmpty().withMessage("Description cannot be empty"),
  body("category")
    .isIn(["Work", "Study", "Personal", "Other"])
    .withMessage("Category not valid"),
  body("date").notEmpty().withMessage("Title cannot be empty"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({
        errors: errors.array(),
      });
    next();
  },
];

module.exports = validateLogbook;
