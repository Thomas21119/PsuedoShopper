const router = require("express").Router();

const homeRoutes = require("./homeRoutes");

//router.use("/", homeRoutes);

const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

module.exports = router;
