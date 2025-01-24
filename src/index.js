// const express = require("express")
// const DBconnection = require("./DBconnection/DBconnection")
// const router = require("./routes")
// const cors = require('cors');
// const cookieParser = require('cookie-parser');
// const bodyParser = require('body-parser');


// const app = express()
// app.use(express.json({ limit: '10mb' })); 
// app.use(express.urlencoded({ limit: '10mb', extended: true })); 
// app.use(bodyParser.json());
// app.use(cookieParser());

// app.use(cors({
//     origin: "*",
//     credentials: true
//   }));
//   app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', '*'); // Replace with your frontend URL
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//     res.setHeader('Access-Control-Allow-Credentials', 'true');
//     next();
//   });

// const port = 5500

// app.listen(
//     port,
//     ()=>{
//         console.log("start server")
// })
// app.use(express.json())
// DBconnection()
// app.use("/v1",router)


const express = require("express");
const DBconnection = require("./DBconnection/DBconnection");
const router = require("./routes");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();

// Middleware
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));
app.use(cookieParser());

const allowedOrigins = ["https://e-commerce-fronted.onrender.com","*"]; // Add your frontend URL here
app.use(
  cors({
    origin: "*",
    credentials: true, // Allow cookies to be sent
  })
);

// Optional: Custom middleware for dynamic CORS headers
app.use((req, res, next) => {
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  next();
});


// Database Connection
DBconnection();

// Routes
app.use("/v1", router);

// Start Server
const port = 5500;
app.listen(port, () => {
  console.log("Server started on port", port);
});
