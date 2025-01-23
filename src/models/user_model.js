const { default: mongoose } = require("mongoose");
const bcrypt = require('bcrypt');

const user_sechma = mongoose.Schema({
    name:{
        type:String,
        trim:true
    },
    email:{
        unique: true,
        type:String,
        trim:true,
    },
    password:{
        type:String,
        trim:true,
    },
    profilePic:{
        type:String,
        trim:true,
    },
    role:{
        type:String,
        trim:true,
    }
},{
    timestamps:true
}) 



const user = mongoose.model("user",user_sechma)

module.exports = user