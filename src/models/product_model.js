const mongoose = require("mongoose")

const product_schema = mongoose.Schema({

    productname:{
        type:String,
    },

    brandname:{
        type:String
    },

    category:{
        type:String
    },

    productimage:{
        type:Array
    },

    price:{
        type:Number
    },

    description:{
        type:String
    },

    sellingPrice:{
        type:Number,
        default:0,
    },

},{
    timestamps:true,
    versionKey:false
})

const product = mongoose.model("product",product_schema)

module.exports = product