const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// User Schema Definition
const userSchema = new Schema({
  fullName: { type: String },
  email: { type: String },
  password: { type: String },
  createdOn: { type: Date, default: new Date().getTime() },
});

// Export the User model
module.exports = mongoose.model("User", userSchema);
