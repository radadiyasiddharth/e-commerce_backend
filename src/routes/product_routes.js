const express = require("express")
const { product_Controller } = require("../controller")
const authToken = require("../middleware/authToken")

const router = express.Router()



router.post(
    "/create_product",
    authToken,
    product_Controller.uploadProduct
)

router.get(
    "/get_allproduct",
    product_Controller.getproduct
)

router.post(
    "/update_product",
    authToken,
    product_Controller.updateProduct
),
router.get(
    "/search_product",
    product_Controller.searchProduct
),
router.post(
    "/filterProduct",
    product_Controller.filterProduct
),
router.post(
    "/deleteProduct",
    product_Controller.deleteProduct
)


module.exports = router