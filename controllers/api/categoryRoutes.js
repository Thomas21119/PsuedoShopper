const router = require("express").Router();
const { Category } = require("../../models");
const withAuth = require("../../utils/auth");

//route to create a new category
router.post("/create", withAuth, async (req, res) => {
  try {
    const newCategory = await Category.create({ type: req.body.itemName });
    res.status(200).json(newCategory);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
