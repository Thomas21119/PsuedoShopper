const router = require("express").Router();
const withAuth = require("../utils/auth");
const { Product, User, Wallet, Category } = require("../models");

router.get("/", async (req, res) => {
  try {
    const productData = await Product.findAll({
      include: [{ model: Category }],
    });
    // if (req.session.logged_in) {
    //   const walletData = await Wallet.findOne({
    //     where: {
    //       user_id: req.session.user_id,
    //     },
    //   });
    //   if (walletData) {
    //     const wallet = walletData.get({ plain: true });

    //     res.render("salesPage", { wallet, logged_in: req.session.logged_in });
    //   }
    // } else {
    // }
    const products = productData.map((product) => product.get({ plain: true }));
    res.render("salesPage", { products, logged_in: req.session.logged_in });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/signup", async (req, res) => {
  try {
    res.render("signUp", { logged_in: req.session.logged_in });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", async (req, res) => {
  try {
    res.render("login", { logged_in: req.session.logged_in });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/dashboard", withAuth, async (req, res) => {
  try {
    res.render("dashboard", { logged_in: req.session.logged_in });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/wallet", withAuth, async (req, res) => {
  try {
    // const userWallet = await Wallet.findOne({
    //   where: {
    //     //user: req.body.user
    //   },
    // });
    console.log("here");
    res.render("wallet", { logged_in: req.session.logged_in });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/product/:id", withAuth, async (req, res) => {
  try {
    const postData = await Product.findByPk(req.params.id, {
      include: [{ model: Category }],
    });

    const product = postData.get({ plain: true });

    res.render("product", { product, logged_in: req.session.logged_in });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/sell", withAuth, async (req, res) => {
  try {
    console.log("hello");
    const userProductsData = await Product.findAll({
      include: [{ model: Category }],
      where: { user_id: req.session.user_id },
    });
    console.log("this is the pull", userProductsData);
    console.log("yup before");
    const product = userProductsData.map((Data) => Data.get({ plain: true }));
    console.log("yup after");
    console.log("this is plain", product);

    res.render("sell", { product, logged_in: req.session.logged_in });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/purchase/:id", withAuth, async (req, res) => {
  try {
    const postData = await Product.findByPk(req.params.id, {
      include: [{ model: Category }],
    });

    const product = postData.get({ plain: true });

    res.render("purchase", { product, logged_in: req.session.logged_in });
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
