const express = require("express");
const cors = require("cors");

const app = express();

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
