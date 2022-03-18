const Link = require("../models/links");

exports.addLinks = (req, res) => {
  const { linkName, link } = req.body;
  console.log(linkName, link);
  const newLink = Link({ linkName, link });
  newLink
    .save()
    .then((links) => {
      return res.status(200).json({ msg: "Links Saved" });
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).json({ msg: "Something went wrong" });
    });
};

exports.getAllLinks = (req, res) => {
  Link.find()
    .then((links) => {
      if (links) {
        return res.status(200).json(links);
      } else {
        return res.status(401).json({ msg: "Invalid token" });
      }
    })
    .catch((err) => {
      return res.status(500).json({ msg: "Server Error" });
    });
};
