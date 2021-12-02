const wallet = async (currentUser) => {
  const userWallet = await Wallet.findOne({
    where: {
      user_id: currentUser,
    },
  });
  const currentWallet = userWallet.get({ plain: true });
  console.log(currentWallet);
  return currentWallet;
};
