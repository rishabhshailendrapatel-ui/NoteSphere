const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const connectDB = () => {
  mongoose
    .connect(process.env.DATABASE_URL)
    .then(() => console.log("Database Connected."));
};

module.exports = connectDB;
