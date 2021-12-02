const router = require("express").Router();
const userRoutes = require("./userRoutes");
const productRoutes = require("./productRoutes");
const walletRoutes = require("./walletRoutes");

router.use("/users", userRoutes);
router.use("/products", productRoutes);
router.use("/wallet", walletRoutes);

module.exports = router;
