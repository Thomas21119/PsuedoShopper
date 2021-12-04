const router = require("express").Router();
const { User, Wallet } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/", async (req, res) => {
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
    return newUser.id;
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/createWallet", async (req, res) => {
  try {
    const userWallet = await Wallet.create({
      user_id: req.session.user_id,
      credits: 200,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
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

router.put("/walletBuy", async (req, res) => {
  const newOwnerData = await User.findByPk(req.session.user_id, {
    include: { model: Wallet },
  });

  const newOwner = newOwnerData.get({ plain: true });

  if (newOwner.wallet.credits >= req.body.cost) {
    newOwner.wallet.credits = newOwner.wallet.credits - req.body.cost;
  } else {
    res.status(404).json({ message: "Not enough Money in buyers account" });
  }
  res.status(200).json(newOwner);
});

router.put("/walletSell", async (req, res) => {
  const ownerData = await User.findByPk(req.body.currentOwner, {
    include: { model: Wallet },
  });

  const currentOwner = ownerData.get({ plain: true });
  currentOwner.wallet.credits = currentOwner.wallet.credits + req.body.cost;

  res.status(200).json(currentOwner);
});

module.exports = router;
