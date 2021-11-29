const sequelize = require('../config/connection');
const { User, Wallet , Product} = require('../models');

const seedProducts = require("./product-seeds");
const seedUsers = require("./user-seeds");
const seedWallets = require("./wallet-seeds");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedUsers();
  console.log('\n----- USERS SEEDED -----\n');

  await seedProducts();
  console.log('\n----- PRODUCTS SEEDED -----\n');

  await seedWallets();
  console.log('\n----- Wallets SEEDED -----\n');

  process.exit(0);
};

seedAll();
