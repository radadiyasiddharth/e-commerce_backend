const {User} = require("../models")

const uploadProductPermission = async(userId) => {
        const user = await User.findById(userId)
        if(user.role !== "admin"){
            return false
        }
            return false
        
}

module.exports =  uploadProductPermission
