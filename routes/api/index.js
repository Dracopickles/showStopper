const router = require("express").Router();
const userRoutes = require("./user");
const serviceRoutes = require("./service")

// Book routes
router.use("/users", userRoutes);
router.use("/services", serviceRoutes);

module.exports = router;
