const router = require("express").Router();

const userRoutes = require("./userRoutes");
const productRoutes = require("./productRoutes");
const walletRoutes = require("./walletRoutes");
const historyRoutes = require("./historyRoutes");
const categoryRoutes = require("./categoryRoutes");

router.use("/history", historyRoutes);
router.use("/users", userRoutes);
router.use("/products", productRoutes);
router.use("/wallet", walletRoutes);
router.use("/categories", categoryRoutes);

module.exports = router;
