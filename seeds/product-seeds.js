const { Product } = require('../models');

const productData = [
  {
    product: "Watch",
    user_id: 1,
    cost:50,
  },
  {
    product: "Phone",
    user_id: 2,
    cost:40,
  },
  {
    product: "Tablet",
    user_id: 3,
    cost:100,
  },
  {
    product: "Laptop",
    user_id: 4,
    cost:150,
  },
  {
    product: "Shirt",
    user_id: 1,
    cost: 20,
  },
  {
    product: "Shoes",
    user_id: 2,
    cost:40,
  },
  {
    product: "Jackets",
    user_id: 3,
    cost:50,
  },
  {
    product: "Coffee",
    user_id: 4,
    cost:10,
  },
  {
    product: "Sweater",
    user_id: 1,
    cost:20,
  },
  {
    product: "Jeans",
    user_id: 2,
    cost:25,
  },
  {
    product: "Candles",
    user_id: 3,
    cost:05,
  },
  {
    product: "Towels",
    user_id: 4,
    cost:10,
  },
  {
    product: "Umbrella",
    user_id: 1,
    cost:10,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
