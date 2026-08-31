const mongoose = require("mongoose");

// Note Schema Definition
const noteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  tags: {
    type: [String],
    default: [],
  },
  isPinned: {
    type: Boolean,
    default: false,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId, // Proper ObjectId type for user references
    ref: "User", // Links note directly to the User model
    required: true,
  },
  createdOn: {
    type: Date,
    default: Date.now, // Dynamic date function call on creation
  },
});

// Export the Note model
module.exports = mongoose.model("Note", noteSchema);
