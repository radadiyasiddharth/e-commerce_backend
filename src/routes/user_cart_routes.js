const express = require("express")
const { user_Cart_Controller } = require("../controller")
const authToken = require("../middleware/authToken")

const router = express.Router()

router.post(
    "/addtocartproduct",
    authToken,
    user_Cart_Controller.addToCart
),
router.post(
    "/countaddtocartproduct",
    authToken,
    user_Cart_Controller.countAddToCartProduct
)
router.get(
    "/addtocartviewproduct",
    authToken,
    user_Cart_Controller.addToCartViewProduct
),
router.post(
    "/updateAddToCartProduct",
    authToken,
    user_Cart_Controller.updateAddToCartProduct
),
router.post(
    "/deleteAddToCartProduct",
    authToken,
    user_Cart_Controller.deleteAddToCartProduct
)

module.exports = router