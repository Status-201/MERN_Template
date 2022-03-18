const router = require("express").Router();
const { login, currentProfile } = require("../controllers/auth");
const { isUserAuth } = require("../middlewares/auth");

router.post("/login", login);
router.get("/profile", isUserAuth, currentProfile);

module.exports = router;
