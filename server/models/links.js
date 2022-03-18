const mongoose = require("mongoose");

const linkSchema = mongoose.Schema({
  linkName: { type: String, required: true },
  link: { type: String, required: true },
});

module.exports = User = mongoose.model("link", linkSchema);
