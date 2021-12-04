const { History } = require("../models");

const historyData = [
  {
    product_id: 2,
    salePrice: 50,
  },
  {
    product_id: 12,
    salePrice: 60,
  },
  {
    product_id: 13,
    salePrice: 60,
  },
  {
    product_id: 13,
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
  {
    product_id: 2,
    salePrice: 50,
  },
  {
    product_id: 2,
    salePrice: 60,
  },
  {
    product_id: 2,
    salePrice: 60,
  },
  {
    product_id: 2,
    salePrice: 50,
  },
  {
    product_id: 2,
    salePrice: 60,
  },
  {
    product_id: 2,
    salePrice: 50,
  },
  {
    product_id: 2,
    salePrice: 50,
  },
  {
    product_id: 2,
    salePrice: 60,
  },
  {
    product_id: 2,
    salePrice: 60,
  },
  {
    product_id: 2,
    salePrice: 50,
  },
  {
    product_id: 2,
    salePrice: 70,
  },
  {
    product_id: 2,
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
    product_id: 5,
    salePrice: 50,
  },
  {
    product_id: 5,
    salePrice: 60,
  },
  {
    product_id: 5,
    salePrice: 60,
  },
  {
    product_id: 5,
    salePrice: 50,
  },
  {
    product_id: 5,
    salePrice: 70,
  },
  {
    product_id: 5,
    salePrice: 50,
  },
  {
    product_id: 5,
    salePrice: 50,
  },
  {
    product_id: 5,
    salePrice: 60,
  },
  {
    product_id: 6,
    salePrice: 60,
  },
  {
    product_id: 6,
    salePrice: 50,
  },
  {
    product_id: 6,
    salePrice: 60,
  },
  {
    product_id: 6,
    salePrice: 50,
  },
  {
    product_id: 6,
    salePrice: 50,
  },
  {
    product_id: 6,
    salePrice: 60,
  },
  {
    product_id: 6,
    salePrice: 60,
  },
  {
    product_id: 6,
    salePrice: 50,
  },
  {
    product_id: 6,
    salePrice: 70,
  },
  {
    product_id: 6,
    salePrice: 50,
  },
  {
    product_id: 7,
    salePrice: 50,
  },
  {
    product_id: 7,
    salePrice: 60,
  },
  {
    product_id: 7,
    salePrice: 60,
  },
  {
    product_id: 7,
    salePrice: 50,
  },
  {
    product_id: 7,
    salePrice: 60,
  },
  {
    product_id: 7,
    salePrice: 50,
  },
  {
    product_id: 4,
    salePrice: 50,
  },
  {
    product_id: 4,
    salePrice: 60,
  },
  {
    product_id: 4,
    salePrice: 60,
  },
  {
    product_id: 4,
    salePrice: 50,
  },
  {
    product_id: 4,
    salePrice: 70,
  },
  {
    product_id: 4,
    salePrice: 50,
  },
  {
    product_id: 4,
    salePrice: 50,
  },
  {
    product_id: 4,
    salePrice: 60,
  },
  {
    product_id: 4,
    salePrice: 60,
  },
  {
    product_id: 4,
    salePrice: 50,
  },
  {
    product_id: 4,
    salePrice: 60,
  },
  {
    product_id: 7,
    salePrice: 50,
  },
  {
    product_id: 9,
    salePrice: 50,
  },
  {
    product_id: 9,
    salePrice: 60,
  },
  {
    product_id: 9,
    salePrice: 60,
  },
  {
    product_id: 9,
    salePrice: 50,
  },
  {
    product_id: 3,
    salePrice: 70,
  },
  {
    product_id: 3,
    salePrice: 50,
  },
  {
    product_id: 3,
    salePrice: 50,
  },
  {
    product_id: 3,
    salePrice: 60,
  },
  {
    product_id: 3,
    salePrice: 60,
  },
  {
    product_id: 3,
    salePrice: 50,
  },
  {
    product_id: 3,
    salePrice: 60,
  },
  {
    product_id: 3,
    salePrice: 50,
  },
  {
    product_id: 3,
    salePrice: 50,
  },
  {
    product_id: 3,
    salePrice: 60,
  },
  {
    product_id: 9,
    salePrice: 60,
  },
  {
    product_id: 8,
    salePrice: 50,
  },
  {
    product_id: 8,
    salePrice: 70,
  },
  {
    product_id: 8,
    salePrice: 50,
  },
  {
    product_id: 8,
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
    product_id: 10,
    salePrice: 60,
  },
  {
    product_id: 10,
    salePrice: 50,
  },
  {
    product_id: 10,
    salePrice: 50,
  },
  {
    product_id: 10,
    salePrice: 60,
  },
  {
    product_id: 11,
    salePrice: 60,
  },
  {
    product_id: 11,
    salePrice: 50,
  },
  {
    product_id: 12,
    salePrice: 70,
  },
  {
    product_id: 12,
    salePrice: 50,
  },
];

const seedHistory = () => History.bulkCreate(historyData);

module.exports = seedHistory;
