const { Cart_product } = require("../models");

const addToCart = async (req, res) => {
  try {
    const { productId } = req?.body;
    const currentuser = req?.userId;

    const isProductAvailable = await Cart_product.findOne({
      productId,
      userId: currentuser,
    });
    if (isProductAvailable) {
      return res.status(400).json({
        success: false,
        message: "Product already exists in cart",
      });
    }

    const newAddToCart = {
      productId: productId,
      userId: currentuser,
      quantity: 1,
    };
    const addtocart = new Cart_product(newAddToCart);
    const saveproduct = await addtocart.save();
    res.status(200).json({
      success: true,
      message: "Product added to cart",
      data: saveproduct,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const countAddToCartProduct = async (req, res) => {
  try {
    const count = await Cart_product.countDocuments({
      userId: req?.userId,
    });
    res.json({
      data: {
        count: count,
      },
      message: "ok",
      success: true,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const addToCartViewProduct = async (req, res) => {
  try {
    const currentUser = req.userId;
    const allProduct = await Cart_product.find({
      userId: currentUser,
    }).populate("productId");

    res.status(200).json({
      success: true,
      data: allProduct,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const updateAddToCartProduct = async (req, res) => {
  try {
    const currentuser = req?.userId;
    const qty = req?.body?.quantity;
    const currentid = req?.body?._id;
    const updateProduct = await Cart_product.updateOne(
      { _id: currentid },
      { $set: { quantity: qty } }
    );

    res.status(200).json({
      success: true,
      message: "product updated successfully",
      data: updateProduct,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const deleteAddToCartProduct = async (req, res) => {
  try {
    const currentuserId = req.userId;
    const addToCartProduct = req.body._id;
    const deleteProduct = await Cart_product.deleteOne({
      _id: addToCartProduct,
    });
    res.status(200).json({
      success: true,
      message: "product deleted successfully",
      data: deleteProduct,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  addToCart,
  countAddToCartProduct,
  addToCartViewProduct,
  updateAddToCartProduct,
  deleteAddToCartProduct,
};
    