const { User } = require("../models")

const all_user = async(req,res) => {
    try {
        // console.log("all user id",req.userId)
        const alluser = await User.find()
        res.status(200).json({
            success:true,
            data:alluser
        })

    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
}

const update_user = async(req,res) => {
    try {
        const usersession = req.userId
        const {userId,role,name,email} = req.body
        const payload = {
            ...(email && {email:email}),
            ...(role && {role:role}),
            ...(name && {name:name})
        }
        
        const updateUser = await User.findByIdAndUpdate(userId,payload)
        console.log(userId)
        res.status(200).json({
            success:true,
            message:"User updated successfully",
            data:updateUser
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
}

module.exports = {
    all_user,
    update_user
}