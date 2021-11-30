const router = require("express").Router();
const { Product } = require("../../models");
const withAuth = require("../../utils/auth");

router.put("/buy/:id", withAuth, async (req, res) => {
  try {
    const productPurchased = await Product.findByPk(req.params.id);

    if (!productPurchased) {
      res.status(400).json({ message: "cant find the id of this product" });
      return;
    }
    console.log("before", productPurchased);
    productPurchased.user_id = req.session.user_id;
    productPurchased.forSale = false;
    console.log(productPurchased);
    res.status(200).json("after", productPurchased);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
