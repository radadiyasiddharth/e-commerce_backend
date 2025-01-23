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
//     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000'); // Replace with your frontend URL
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
const bodyParser = require("body-parser");

const app = express();
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use(cors({
  origin: "*", // Replace with your frontend URL
  credentials: true, // Allow cookies to be sent
}));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://yourfrontenddomain.com"); // Match your frontend URL
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.setHeader("Access-Control-Allow-Credentials", "true"); // Allow credentials
  next();
});

const port = process.env.PORT || 5500;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

DBconnection();
app.use("/v1", router);
