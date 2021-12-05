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
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/newSale", withAuth, async (req, res) => {
  try {
    const newItemCost = req.body.itemCost;
    const newItemCategoryId = req.body.newCategoriesId;
    const userId = req.session.user_id;
    const newProduct = await Product.create({
      cost: newItemCost,
      category_id: newItemCategoryId,
      user_id: userId,
    });
    res.status(200).json(newProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/remove/:id', withAuth, async (req, res) => {
  try {
    const prod_id = await Product.findByPk(req.params.id);

    if (!prod_id) {
      console.log(prod_id);
      res.status(400).json({ message: "cant find the id of this product" });
      return;
    }
    await prod_id.destroy();
    return;
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post('/update/:id', withAuth, async (req, res) => {
  try {
    
    const productWithdraw = await Product.findByPk(req.params.id);

    if (!productWithdraw) {
      res.status(400).json({ message: "cant find the id of this product" });
      return;
    }
    console.log(req.session.id)
    // productWithdraw.user_id = req.session.user_id;
    // productWithdraw.forSale = false;

    await productWithdraw.save();

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


module.exports = router;
