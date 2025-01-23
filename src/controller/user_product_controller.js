const { Product } = require("../models");

const getCtegoryProduct = async (req, res) => {
  try {
    const productCategory = await Product.distinct("category");
    // console.log(productCategory)
    const productByCatogery = [];
    for (const category of productCategory) {
      const product = await Product.findOne({ category });
      if (product) {
        productByCatogery.push(product);
      }
    }
    res.status(200).json({
      success: true,
      data: productByCatogery,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const getCategoryWiseProduct = async (req, res) => {
  try {
    const { category } = req?.body;
    const product = await Product.find({ category });
    // console.log(product);
    res.status(200).json({
      success: true,
      data: product,
    });
  } catch (error) {
    res.status(200).json({
      success: false,
      message: error.message,
    });
  }
};

const getProductDetail = async (req, res) => {
  try {
    const { product_id } = req.body;

    const productDetail = await Product.findById(product_id);
    res.status(200).json({
      success: true,
      data: productDetail,
    });
  } catch (error) {
    res.status(400).json({
        success:false,
        message:error.message
    })
  }
};

module.exports = {
  getCtegoryProduct,
  getCategoryWiseProduct,
  getProductDetail
};
