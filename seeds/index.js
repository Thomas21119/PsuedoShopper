const sequelize = require("../config/connection");
const {
  User,
  Wallet,
  Product,
  Category,
  History,
  SalesHistory,
} = require("../models");

const seedCategories = require("./category-seeds");
const seedProducts = require("./product-seeds");
const seedUsers = require("./user-seeds");
const seedWallets = require("./wallet-seeds");
const seedHistory = require("./history-seeds");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("\n----- DATABASE SYNCED -----\n");

  await seedCategories();
  console.log("\n----- CATEGORIES SEEDED -----\n");

  await seedUsers();
  console.log("\n----- USERS SEEDED -----\n");

  await seedProducts();
  console.log("\n----- PRODUCTS SEEDED -----\n");

  await seedWallets();
  console.log("\n----- Wallets SEEDED -----\n");

  await seedHistory();
  console.log("\n----- History SEEDED -----\n");

  process.exit(0);
};

seedAll();
