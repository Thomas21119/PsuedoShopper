const { Product } = require("../models");

const productData = [
  {
    category_id: 1,
    user_id: 1,
    cost: 50,
    forSale: true,
  },
  {
    category_id: 2,
    user_id: 2,
    cost: 40,
    forSale: true,
  },
  {
    category_id: 3,
    user_id: 3,
    cost: 100,
    forSale: true,
  },
  {
    category_id: 4,
    user_id: 4,
    cost: 150,
    forSale: true,
  },
  {
    category_id: 4,
    user_id: 5,
    cost: 666,
    forSale: true,
  },
  {
    category_id: 4,
    user_id: 6,
    cost: 40,
    forSale: true,
  },
  {
    category_id: 5,
    user_id: 3,
    cost: 50,
    forSale: true,
  },
  {
    category_id: 5,
    user_id: 4,
    cost: 10,
    forSale: true,
  },
  {
    category_id: 6,
    user_id: 1,
    cost: 20,
    forSale: true,
  },
  {
    category_id: 8,
    user_id: 5,
    cost: 25,
    forSale: true,
  },
  {
    category_id: 9,
    user_id: 3,
    cost: 5,
    forSale: true,
  },
  {
    category_id: 7,
    user_id: 4,
    cost: 10,
    forSale: true,
  },
  {
    category_id: 2,
    user_id: 1,
    cost: 10,
    forSale: true,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
