const router = require("express").Router();
const withAuth = require("../utils/auth");

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

module.exports = router;
