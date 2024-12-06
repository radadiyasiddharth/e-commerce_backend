const express = require("express")
const { user_Controller } = require("../controller")
const authToken = require("../middleware/authToken")




const router = express.Router()

router.post(
    "/create_user",
    user_Controller.create_user
)
router.post(
    "/signin",
    user_Controller.signin_user
)
router.get(
    "/user_detail",
    authToken,user_Controller.user_detail
)
router.get(
    "/logout",
    user_Controller.user_logout
)

module.exports = router