const mongoose = require("mongoose")

const DBconnection = () => {
    mongoose.connect("mongodb+srv://radadiyasiddharth994:Siddh123@cluster0.tsrp14z.mongodb.net/ecommerce")
    .then(()=>{
            console.log("connect")
    })
    .catch((error)=>{
        console.log(error)
    })
}

module.exports  = DBconnection