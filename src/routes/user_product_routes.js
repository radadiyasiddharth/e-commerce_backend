const express = require("express")
const { user_Product_Controller } = require("../controller")

const router = express.Router()

router.get(
    "/get_allproduct",
    user_Product_Controller.getCtegoryProduct
)

router.post(
    "/get_categorywise_product",
    user_Product_Controller.getCategoryWiseProduct
)
router.post(
    "/get_productDetail",
    user_Product_Controller.getProductDetail
)

module.exports = router