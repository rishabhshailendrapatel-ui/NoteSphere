const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;

// Middleware to authenticate requests using JWT

const authenticateToken = (req, res, next) => {
  // 1. Get the Authorization header from the incoming request
  const authHeader = req.headers["authorization"];

  // 2. Extract token from "Bearer <TOKEN>" format
  const token = authHeader && authHeader.split(" ")[1];

  // 3. If no token is provided, return 401 Unauthorized with JSON message
  if (!token) {
    return res
      .status(401)
      .json({ message: "Access denied. No token provided." });
  }

  // 4. Verify the token using secret key
  jwt.verify(token, ACCESS_TOKEN_SECRET, (err, user) => {
    // 5. If token is invalid or expired, return 403 Forbidden with JSON message
    if (err) {
      return res.status(403).json({ message: "Token is invalid or expired." });
    }

    // 6. Attach decoded user payload to request object and proceed
    req.user = user;

    // Pass control to the next middleware/route handler
    next();
  });
};

module.exports = { authenticateToken };
