const express = require("express");
const cors = require("cors");
const connectDB = require("./config/database");

const app = express();

// Database Connection
connectDB();

// Middleware
app.use(cors({ origin: "*" }));

// Routes
app.get("/", (req, res) => {
  res.send("Hello World");
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});
