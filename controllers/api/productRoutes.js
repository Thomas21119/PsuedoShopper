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
<<<<<<< HEAD

    console.log("after", productPurchased);
    res.status(200).json(productPurchased);
=======
    console.log(productPurchased);
    res.status(200).json("after", productPurchased);
>>>>>>> 25bec64256a6aed356a3fec18c257c78a40d20a6
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
