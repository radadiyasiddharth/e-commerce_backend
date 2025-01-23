const express = require("express")
const { admin_Controller } = require("../controller")
const authToken = require("../middleware/authToken")

const router = express.Router()


router.get(
    "/all_user",
    authToken,
    admin_Controller.all_user
)
router.post(
    "/update_user",
    authToken,admin_Controller.update_user
)

module.exports = router