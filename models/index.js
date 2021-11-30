const User = require("./User");
const Product = require("./Product");
const Wallet = require("./Wallet");
const Category = require("./Category");

Product.belongsTo(Category, {
  foreignKey: "category_id",
});

Category.hasMany(Product, {
  foreignKey: "category_id",
});

User.hasMany(Product, {
  foreignKey: "user_id",
});

Product.belongsTo(User, {
  foreignKey: "user_id",
});

User.hasOne(Wallet, {
  foreignKey: "user_id",
  onDelete: "cascade",
});

Wallet.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "cascade",
});

module.exports = { User, Product, Wallet, Category };
