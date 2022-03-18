const jwt = require("jsonwebtoken");
const User = require("../models/user");

exports.isUserAuth = (req, res, next) => {
  const token = req.header("Bearer");
  if (token) {
    jwt.verify(token, process.env.SECRET_AUTH_KEY, (err, payload) => {
      if (err) {
        return res.status(401).json({ errors: [{ msg: "Invalid token" }] });
      }
      const { email } = payload;
      User.findOne({ email }).then((userdata) => {
        req.user = userdata;
        next();
      });
    });
  } else {
    return res.status(401).json({ errors: [{ msg: "Token required" }] });
  }
};
