const { Wallet } = require('../models');

const walletData = [
  {
    credits: 10.2,
    user_id: 1,
  },
  {
    credits: 15.8,
    user_id: 3,
  },
  {
    credits: 13.5,
    user_id: 4,
  },
  {
    credits: 16.5,
    user_id: 2,
  },
  {
    credits: 22.5,
    user_id: 5,
  },
  {
    credits: 30.5,
    user_id: 6,
  },
];

const seedWallets = () => Wallet.bulkCreate(walletData);

module.exports = seedWallets;
