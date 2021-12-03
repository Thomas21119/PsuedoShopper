const { Category } = require("../models");

const categoryData = [
  {
    type: "Watch",
  },
  {
    type: "Phone",
  },
  {
    type: "Laptop",
  },
  {
    type: "Shirt",
  },
  {
    type: "Shoes",
  },
  {
    type: "Jackets",
  },
  {
    type: "Coffee",
  },
  {
    type: "Sweater",
  },
  {
    type: "Jeans",
  },
  {
    type: "Candles",
  },
  {
    type: "Towels",
  },
  {
    type: "Umbrella",
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
