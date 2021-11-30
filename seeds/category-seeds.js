const { Category } = require("../models");

const CategoryData = [
  {
    type: "Watch",
  },
  {
    type: "Phone",
  },
  {
    type: "Tablet",
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

const seedCategories = () => Category.bulkCreate(CategoryData);

module.exports = seedCategories;
