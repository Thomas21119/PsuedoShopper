const { History } = require("../models");

const historyData = [
  {
    product_id: 1,
    salePrice: 50,
  },
  {
    product_id: 1,
    salePrice: 60,
  },
  {
    product_id: 1,
    salePrice: 60,
  },
  {
    product_id: 1,
    salePrice: 50,
  },
  {
    product_id: 1,
    salePrice: 60,
  },
  {
    product_id: 1,
    salePrice: 50,
  },
  {
    product_id: 1,
    salePrice: 50,
  },
  {
    product_id: 1,
    salePrice: 60,
  },
  {
    product_id: 1,
    salePrice: 60,
  },
  {
    product_id: 1,
    salePrice: 50,
  },
  {
    product_id: 1,
    salePrice: 70,
  },
  {
    product_id: 1,
    salePrice: 50,
  },
];

const seedHistory = () => History.bulkCreate(historyData);

module.exports = seedHistory;
