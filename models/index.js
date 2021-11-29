const User = require("./User");
const Product = require("./Product");
const Wallet = require("./Wallet");

// User.hasMany(Product, {
//   foreignKey: "user_id",
// });

// Product.belongsToMany(User, {
//   foreignKey: "user_id",
// });

User.hasOne(Wallet, {
  foreignKey: "user_id",
});

Wallet.belongsTo(User, {
  foreignKey: "user_id",

});

module.exports = { User, Product, Wallet };
