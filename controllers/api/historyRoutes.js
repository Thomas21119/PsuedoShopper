const router = require("express").Router();
const { History } = require("../../models");
const withAuth = require("../../utils/auth");

router.get("/:id", async (req, res) => {
  try {
    const historyData = await History.findAll({
      where: { product_id: req.params.id },
    });

    const history = await historyData.map((Data) => Data.get({ plain: true }));

    res.status(200).json(history);
  } catch (err) {
    res.status(500).json(err);
  }
});

//post route for adding a purchase to history
router.post("/", async (req, res) => {
  try {
    const newHistory = await History.create({
      product_id: req.body.product_id,
      salePrice: req.body.salePrice,
    });

    res.status(200).json(newHistory);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
