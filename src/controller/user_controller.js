const { user_Services } = require("../services");
const bcrypt = require("bcrypt");
const jwt  = require("jsonwebtoken")
const { User } = require("../models");


const create_user = async (req, res) => {
  const email = req.body.email;
  try {
    const exist_user = await User.findOne({ email });
    if (exist_user) {
      throw new Error("user already exist");
    }
    const password = await bcrypt.hash(req.body.password, 12);
    req.body.password = password;
    req.body.role = "general"
    const new_user = await user_Services.create_user(req.body);
    if (!new_user) {
      throw new Error("create error");
    }
    res.status(200).json({
      success: true,
      data: new_user,
      message: "user created successfully",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// const signin_user = async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     if (!email || !password) {
//       return res
//         .status(400)
//         .json({ success: false, message: "Please provide email and password" });
//     }

//     const user = await User.findOne({ email });
//     if (!user) {
//       return res
//         .status(400)
//         .json({ success: false, message: "User not found" });
//     }

//     const isPasswordValid = await bcrypt.compare(password, user.password);
//     if (!isPasswordValid) {
//       return res.status(400).json({
//         success: false,
//         message: "Invalid password",
//       });
//     }

//     const tokenData = { _id: user._id, email: user.email };
//     const token = jwt.sign(tokenData, "siddh123", { expiresIn: "8h" });

//     res
//       .cookie("token", token, {
//         httpOnly: true,
//         secure: true,
//       })
//       .json({ success: true, message: "Login successful", data: token });
//   } catch (error) {
//     res.status(400).json({ success: false, message: error.message });
//   }
// };



const  signin_user = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please provide email and password",
      });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User not found",
      });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({
        success: false,
        message: "Invalid password",
      });
    }

    const tokenData = { _id: user._id, email: user.email };
    const token = jwt.sign(tokenData, "siddh123", { expiresIn: "8h" });  

    const tokenoption = {
      httpOnly: true,
      secure: true,
    }

    res.cookie("token", token,tokenoption).json({
      success: true,
      message: "Login successful",
      data:token
    });
  } catch (error) {
    console.error("Internal server error:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};



const user_detail = async(req, res) => { 
  try {
   
      const user = await User.findById(req.userId)
      console.log(user)
      res.status(200).json({
        success:true,
        data:user
      })
  } catch (error) {
    console.error("Internal server error:", error); // Log the actual error for debugging
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};


const user_logout = (req, res) => {
  try {
    res.clearCookie("token");
    res.status(200).json({
      success: true,
      message: "Logout Successfully",
      data: []
    });
  } catch (error) {
    console.error("Internal server error:", error); // Log the error for debugging
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

module.exports = {
  create_user,
  signin_user,
  user_detail,
  user_logout
};
