const express = require("express")
const user_routes = require("./user_routes")
const admin_routes = require("./admin_routes")
const product = require("./product_routes")
const user_product_routes = require("./user_product_routes")
const user_cart_routes = require("./user_cart_routes")
const router = express.Router()

router.use("/user",user_routes)
router.use("/admin",admin_routes)
router.use("/product",product)
router.use("/user_product",user_product_routes)
router.use("/user_cart",user_cart_routes)

module.exports = router