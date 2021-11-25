const router = require("express").Router();

const homePage = require("./homePage");

router.use("/", homePage);

module.exports = router;
