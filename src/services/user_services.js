const { User } = require("../models")


const create_user = (data) => {
    return User.create(data)
}

const signin_user = (password) => {
    return User.findOne({password})
} 



module.exports = {
    create_user,
    signin_user,
}