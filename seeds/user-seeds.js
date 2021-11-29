const { User } = require('../models');

const userData = [
  {
    username: "Tom",
    password: "password"
  },
  {
    username: "Thomas",
    password: "password"
  },
  {
    username: "Ruchi",
    password: "password"
  },
  {
      username: "Mac",
      password: "password"
  }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
