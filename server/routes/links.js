const router = require("express").Router();
const { addLinks, getAllLinks } = require("../controllers/links");
const { isUserAuth } = require("../middlewares/auth");

router.post("/addLinks", isUserAuth, addLinks);
router.get("/getAllLinks", isUserAuth, getAllLinks);

module.exports = router;
