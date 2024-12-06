const { Product } = require("../models")
const uploadProductPermission = require("../helper/permission")


const uploadProduct = async(req,res) => {
    try {
        const sessionUserId = req.userId
        if(!uploadProductPermission(sessionUserId)){
             throw new Error("permission denide")
        }
        const uploadProduct = await Product.create(req.body)
        res.status(200).json({
            success:true,
            data:uploadProduct,
            message:"Product uploaded successfully"
        })
        // console.log(uploadProduct)
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
}

const getproduct = async(req,res) => {
    try {
     
        const getProduct = await Product.find().sort({createdAt:-1})
        // console.log("sfdddddddddddfffffffffsdfs",getProduct)
        res.status(200).json({
            success:true,
            message:"all product",
            data:getProduct,
        })
        // console.log(uploadProduct)
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
}


const updateProduct = async(req,res) => {
    try {
        if(!uploadProductPermission(req.userId)){
         throw new Error("permission denide")   
        }
        const {_id,...resBody} = req.body

        // console.log("-id,resbody",_id,resBody)
        const updateProduct = await Product.findByIdAndUpdate(_id,resBody,{ new: true })
        // console.log("update",updateProduct)
        res.json({
            success:true,
            message:"product updated successfully",
            data:updateProduct
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
}

const searchProduct = async(req,res) => {
    try {
        const query = req?.query.q
        const regex = RegExp(query, "i", "g")
        const prodct = await Product.find({
            "$or":[
                {
                    productname:regex
                },
                {
                    category:regex
                }
            ]
        })
        // console.log(query)
        res.json({
            data:prodct,
            message : "ok",
            success:true
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
}

const filterProduct = async(req,res) => {
    try {
        const categoryList = req?.body?.category
        const product  = await Product.find({
            category : {
                $in : categoryList
            }
        }) 
        console.log("product",product)
        res.status(200).json({
            data:product,
            message : "ok",
            success:true
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
}

const deleteProduct = async(req,res) => {
    try {
        const productId = req?.body?.productId
        const deleteProduct = await Product.deleteOne({_id:productId})
        res.status(200).json({
            success:true,
            message:"product deleted successfully",
            data:deleteProduct
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
}




module.exports = {
    uploadProduct,
    getproduct,
    updateProduct,
    searchProduct,
    filterProduct,
    deleteProduct
}