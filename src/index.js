<<<<<<< HEAD
=======
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


>>>>>>> 2030d2a4e5eff536356722d99693a539d756c4c7
const express = require("express");

const router = require("./routes");
const cors = require("cors");
const cookieParser = require("cookie-parser");
<<<<<<< HEAD
const DBconnection = require("./DBconnection/DBconnection");

const app = express();

// Middleware setup
app.use(cookieParser());
app.use(express.json());
app.use(cors({
  origin: true,  // Adjust according to your needs
  credentials: true
}));

// Connect to the database
DBconnection()

// Routes
app.use("/v1", router);

// Handle 404 - route not found
app.use((req, res, next) => {
  res.status(404).send("Route not defined");
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start server
app.listen(5500, () => {
  console.log("Server is running on port 5500");
=======

const app = express();

// Middleware
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));

app.use(cors({
  origin: true,  // Adjust according to your needs
  credentials: true
}));
app.use(cookieParser());




// Database Connection
DBconnection();

// Routes
app.use("/v1", router);

// Start Server
const port = 5500;
app.listen(port, () => {
  console.log("Server started on port", port);
>>>>>>> 2030d2a4e5eff536356722d99693a539d756c4c7
});
