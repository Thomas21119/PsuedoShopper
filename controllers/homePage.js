const router = require("express").Router();
const path = require("path");
const withAuth = require("../utils/auth");
const { Product, User, Wallet, Category, History } = require("../models");

//a function that gets the user wallet so we can populate the wallet: on every page
const wallet = async (currentUser) => {
  const userWallet = await Wallet.findOne({
    where: {
      user_id: currentUser,
    },
  });
  const currentWallet = userWallet.get({ plain: true });
  return currentWallet;
};

//route to front page with all products currently for sale
router.get("/", async (req, res) => {
  try {
    const productData = await Product.findAll({
      include: [{ model: Category }, { model: User }],
    });
    const products = productData.map((product) => product.get({ plain: true }));
    if (req.session.user_id) {
      const userWallet = await wallet(req.session.user_id);
      res.render("salesPage", {
        products,
        logged_in: req.session.logged_in,
        userWallet,
      });
    } else {
      res.render("salesPage", {
        products,
        logged_in: req.session.logged_in,
      });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// user gets sent to a page that allows them to signup
router.get("/signup", async (req, res) => {
  try {
    if (req.session.user_id) {
      const userWallet = await wallet(req.session.user_id);
      res.render("signUp", { logged_in: req.session.logged_in, userWallet });
    } else {
      res.render("signUp", { logged_in: req.session.logged_in });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//user gets sent to a page that allows them to login
router.get("/login", async (req, res) => {
  try {
    if (req.session.user_id) {
      const userWallet = await wallet(req.session.user_id);
      res.render("login", { logged_in: req.session.logged_in, userWallet });
    } else {
      res.render("login", { logged_in: req.session.logged_in });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//user goes to a page that lists their items and allow them to sell
router.get("/dashboard", withAuth, async (req, res) => {
  try {
    const userData = await User.findOne({
      where: {
        id: req.session.user_id,
      },
    });
    const userName = userData.username;

    const userProductsData = await Product.findAll({
      include: [{ model: Category }],
      where: { user_id: req.session.user_id },
    });
    const product = userProductsData.map((Data) => Data.get({ plain: true }));

    if (req.session.user_id) {
      const userWallet = await wallet(req.session.user_id);
      res.render("dashboard", {
        userName,
        product,
        logged_in: req.session.logged_in,
        userWallet,
      });
    } else {
      res.render("dashboard", { userName, logged_in: req.session.logged_in });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//sends user to a page that allows them to top up their wallet
router.get("/wallet", withAuth, async (req, res) => {
  try {
    const userWallet = await wallet(req.session.user_id);
    res.render("wallet", { logged_in: req.session.logged_in, userWallet });
  } catch (err) {
    res.status(500).json(err);
  }
});

//sends user to a page that allows them to buy an item
router.get("/product/:id", withAuth, async (req, res) => {
  try {
    const userWallet = await wallet(req.session.user_id);
    const postData = await Product.findByPk(req.params.id, {
      include: [{ model: Category }],
    });

    const product = postData.get({ plain: true });
    res.render("product", {
      product,
      logged_in: req.session.logged_in,
      userWallet,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//sends user to a page that allows them to create a new item to sell
router.get("/sell", withAuth, async (req, res) => {
  try {
    const userWallet = await wallet(req.session.user_id);
    const userProductsData = await Product.findAll({
      include: [{ model: Category }],
      where: { user_id: req.session.user_id },
    });
    const product = userProductsData.map((Data) => Data.get({ plain: true }));

    res.render("sell", {
      product,
      logged_in: req.session.logged_in,
      userWallet,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//sends user to a page that they can set a price and put it up for sale
router.get("/sellItem/:id", withAuth, async (req, res) => {
  try {
    const userWallet = await wallet(req.session.user_id);
    const sellProductsData = await Product.findByPk(req.params.id, {
      include: [{ model: Category }],
    });
    const product = sellProductsData.get({ plain: true });
    res.render("sellItem", {
      userWallet,
      product,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//after the user has purchased a product this page is shown
router.get("/purchase/:id", withAuth, async (req, res) => {
  try {
    const userWallet = await wallet(req.session.user_id);
    const postData = await Product.findByPk(req.params.id, {
      include: [{ model: Category }],
    });

    const product = postData.get({ plain: true });

    res.render("purchase", {
      product,
      logged_in: req.session.logged_in,
      userWallet,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//sends user to the sales history of the product
router.get("/chart/:id", async (req, res) => {
  try {
    const historyData = await History.findAll({
      where: { product_id: req.params.id },
    });

    const productData = await Product.findByPk(req.params.id, {
      include: [{ model: Category }],
    });

    const product = productData.get({ plain: true });

    const history = await historyData.map((Data) => Data.get({ plain: true }));
    if (req.session.user_id) {
      const userWallet = await wallet(req.session.user_id);
      res.render("chart", {
        history,
        product,
        logged_in: req.session.logged_in,
        userWallet,
      });
    } else {
      res.render("chart", {
        history,
        product,
        logged_in: req.session.logged_in,
      });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// custom 404 error page
router.get("/:other", (req, res) => {
  //   res.send('404 page here')
  const index = path.join(__dirname, "/", "../public/html", "customerror.html");
  res.sendFile(index);
});

module.exports = router;
