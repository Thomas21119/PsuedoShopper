const router = require("express").Router();
const { User, Wallet } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/", async (req, res) => {
  console.log("here", req.body);
  try {
    const userData = await User.findOne({
      where: { username: req.body.username },
    });

    if (userData) {
      res.status(400).json({
        message: `Username: ${req.body.username} is already taken, please choose another one.`,
      });
      return;
    }

    const newUser = await User.create({ ...req.body });

    req.session.save(() => {
      req.session.user_id = newUser.id;
      req.session.logged_in = true;

      res.json({ user: newUser, message: "You are now logged in!" });
    });
    // res.status(200).json(userWallet);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    const userData = await User.findOne({
      where: {
        username: req.body.username,
      },
    });

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect username or password, please try again" });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.json({ user: userData, message: "You are now logged in!" });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post("/logout", withAuth, (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

router.put("/walletTopUp", withAuth, (req, res) => {});

module.exports = router;
