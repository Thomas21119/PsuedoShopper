const sequelize = require('../config/connection');
const withAuth = require('../utils/auth');
const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('salesPage');
});
module.exports = router;
