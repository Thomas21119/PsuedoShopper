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

    productPurchased.user_id = req.session.user_id;
    productPurchased.forSale = false;

    await productPurchased.save();

    res.status(200).json(productPurchased);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/forSale", withAuth, async (req, res) => {
  try {
    const productSelling = await Product.findByPk(req.body.id);

    productSelling.cost = req.body.price;
    productSelling.forSale = true;

    await productSelling.save();

    res.status(200).json(productSelling);
    res.render("/", { logged_in: req.session.logged_in });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
