const jwt = require('jsonwebtoken');

const authToken =  async(req, res, next) => {
  const token =  req?.cookies?.token
  // console.log("token-------------",token)
  if(!token) {
    return res.status(401).json({
      success: false,
      message: "Please login first"
    })
  }

  const decoded = await jwt.verify(token, "siddh123");
  // console.log("decoded token",decoded)
  req.userId = decoded?._id;
  next()
};

module.exports = authToken;


<<<<<<< HEAD
const authToken = (req, res, next) => {
    try {
      const token =  req.cookies?.token;
      console.log("auth ...",token)
      if (!token) {
        return res.status(401).json({
          success: false,
          // message: "Please Login",
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

=======
>>>>>>> 2030d2a4e5eff536356722d99693a539d756c4c7
