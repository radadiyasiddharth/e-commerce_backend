const jwt  = require("jsonwebtoken")


const authToken = (req, res, next) => {
    try {
      const token =  req.cookies?.token;
      console.log("auth ",token)
      if (!token) {
        return res.status(401).json({
          success: false,
          message: "Please Login",
        });
      }
  
      jwt.verify(token, "siddh123", (err, decoded) => {
        if (err) {
          console.log("Error auth:", err);
          return res.status(401).json({
            success: false,
            message: "Failed to authenticate token",
          });
        }
        req.userId = decoded?._id;
        // console.log("Decoded token:", decoded);
        
        next(); // Call next middleware or route handler
      });
    } catch (error) {
      console.error("Error in authToken middleware:", error);
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  };

module.exports = authToken

