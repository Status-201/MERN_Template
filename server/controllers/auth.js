const User = require("../models/user");
const authKey = process.env.SECRET_AUTH_KEY;
const jwt = require("jsonwebtoken");

exports.login = (req, res) => {
  const { name, email, pic } = req.body;
  // console.log(name, email, pic);
  User.findOne({ email })
    .then((user) => {
      if (user) {
        const authToken = jwt.sign(
          {
            email: user.email,
          },
          authKey,
          {
            expiresIn: "48h",
          }
        );
        return res.status(200).json({ authToken });
      } else {
        const newUser = User({ name, email, pic });
        newUser
          .save()
          .then((user) => {
            const authToken = jwt.sign(
              {
                email: user.email,
              },
              authKey,
              {
                expiresIn: "48h",
              }
            );
            return res.status(200).json({ authToken });
          })
          .catch((err) => {
            console.log(err);
            return res.status(500).json({ msg: "Something went wrong" });
          });
      }
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).json({ msg: "Server Error" });
    });
};

exports.currentProfile = (req, res) => {
  const email = req.user.email;
  User.findOne({ email })
    .then((user) => {
      if (user) {
        return res.status(200).json(user);
      } else {
        return res.status(401).json({ msg: "Invalid token" });
      }
    })
    .catch((err) => {
      return res.status(500).json({ msg: "Server Error" });
    });
};
