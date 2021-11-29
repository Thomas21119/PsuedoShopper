const router = require("express").Router();
const withAuth = require("../utils/auth");
const { Product, User, Wallet } = require("../models");

router.get("/", async (req, res) => {
  try {
    res.render("salesPage", {});
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/signup", async (req, res) => {
  try {
    res.render("signUp", {});
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", async (req, res) => {
  try {
    res.render("login", {});
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/dashboard", async (req, res) => {
  try {
    res.render("dashboard", {});
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/wallet", async (req, res) => {
  try {
    const userWallet = await Wallet.findOne({
      where: {
        //user: req.body.user
      },
    });
    res.render("wallet", {});
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/product/:id", async (req, res) => {
  try {
    const postData = await Product.findByPk(req.params.id);

    const product = postData.get({ plain: true });

    res.render("product", { product, logged_in: req.session.logged_in });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
