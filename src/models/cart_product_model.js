const mongoose = require("mongoose")

const cart_product_schema = mongoose.Schema({

   productId:{
    ref:"product",
    type:mongoose.Schema.Types.ObjectId
   },
   quantity:Number,
   userId:String

},{
    timestamps:true,
    versionKey:false
})

const cart_product = mongoose.model("cart_product",cart_product_schema)

module.exports = cart_product