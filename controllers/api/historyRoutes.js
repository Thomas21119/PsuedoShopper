const router = require("express").Router();
const { History } = require("../../models");
const withAuth = require("../../utils/auth");

router.get("/:id", async (req, res) => {
  try {
    const historyData = await History.findAll({
      where: { product_id: req.params.id },
    });

    const history = await historyData.map((Data) => Data.get({ plain: true }));

    console.log(history);
    res.status(200).json(history);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
