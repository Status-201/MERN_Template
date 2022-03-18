const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  pic: { type: String },
  id: { type: String },
});

module.exports = User = mongoose.model("users", userSchema);
