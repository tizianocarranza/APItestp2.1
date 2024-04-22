const router = require("express").Router();
const { login, register } = require("../controllers/users");
const { verifyUser, verifyNewUser } = require("../middleware/userControl");

router.post("/login", verifyUser, login);
router.post("/register", verifyNewUser, register);

module.exports = router;
