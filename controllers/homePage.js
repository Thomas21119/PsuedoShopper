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

router.get("/dashboard", async (req, res) => {
  try {
    res.render("dashboard", { logged_in: req.session.logged_in });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/wallet", async (req, res) => {
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

router.get("/product/:id", async (req, res) => {
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

router.get("/sell", async (req, res) => {
  try {
    //user: req.body.user

    res.render("sell", { logged_in: req.session.logged_in });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
