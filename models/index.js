const User = require('./User');
const Product = require('./Product');

User.hasMany(Product, {
  foreignKey: 'user_id',
});

Product.belongsToMany(User, {
  through: 'user_id',
});

module.exports = { User, Product };
