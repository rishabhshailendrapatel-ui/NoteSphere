const jwt = require("jsonwebtoken");

const authenticateToken = (req, res, next) {
  // Get header value
  const authHeader = req.headers["authorization"];

  // Extract token from "Bearer <TOKEN>"
  const token = authHeader && authHeader.split(" ")[1];

  // Check if token exists
  if (!token) return res.sendStatus(401);

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(401);
    req.user = user;
    next();
  });
}

module.exports = { authenticateToken };
