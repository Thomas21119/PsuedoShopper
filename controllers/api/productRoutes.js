const router = require("express").Router();
const { Product } = require("../../models");

router.put("/buy/:id", async (req, res) => {
  try {
    console.log(req.params.id, req.session.user_id);
    const productPurchased = await Product.update(
      { user_id: req.session.user_id },
      {
        where: {
          id: res.params.id,
        },
      }
    );
    if (!productPurchased) {
      res.status(400).json({ message: "cant find the id of this product" });
      return;
    }
    res.status.json(productPurchased);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
