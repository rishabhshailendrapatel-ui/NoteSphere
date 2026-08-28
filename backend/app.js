const express = require("express");
const cors = require("cors");
const connectDB = require("./config/database");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

const PORT = process.env.PORT;

// Database Connection
connectDB();

// Middleware
app.use(express.json());
app.use(cors({ origin: "*" }));

// Routes
app.get("/", (req, res) => {
  res.json({ data: "Hello World" });
});

app.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});
