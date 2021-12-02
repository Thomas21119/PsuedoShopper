const router = require("express").Router();
const { User, Wallet } = require("../../models");

router.post("/createWallet", async (req, res) => {
  try {
    const userWallet = await Wallet.create({
      user_id: req.session.user_id,
      credits: 200,
    });
    res.status(200).json(userWallet);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/walletBuy", async (req, res) => {
  const buyersWalletData = await Wallet.findOne({
    where: { user_id: req.session.user_id },
  });

  const buyersWallet = buyersWalletData.get({ plain: true });

  if (buyersWallet.credits >= req.body.cost) {
    buyersWallet.credits = buyersWallet.credits - req.body.cost;
  } else {
    res.status(400).json({ message: "Not enough Money in buyers account" });
    return;
  }
  console.log("api route buy:", buyersWallet.credits);

  await Wallet.update(
    {
      credits: buyersWallet.credits,
    },
    {
      where: {
        user_id: req.session.user_id,
      },
    }
  );
  res.status(200).json(buyersWallet);
  console.log("api route buy last");
});

router.put("/walletSell", async (req, res) => {
  const sellersWalletData = await Wallet.findOne({
    where: { user_id: req.body.currentOwner },
  });
  console.log(req.body.currentOwner);
  const sellersWallet = sellersWalletData.get({ plain: true });

  sellersWallet.credits = sellersWallet.credits + parseInt(req.body.cost);

  await Wallet.update(
    {
      credits: sellersWallet.credits,
    },
    {
      where: {
        user_id: req.body.currentOwner,
      },
    }
  );
  res.status(200).json(sellersWallet);
});

module.exports = router;
