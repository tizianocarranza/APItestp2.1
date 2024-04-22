const router = require("express").Router()
const { getAll, findOne, create, update, remove } = require("../controllers/personas");
const { authUser } = require("../middleware/userControl");

router.get("/", authUser, getAll);
router.get("/:id", authUser, findOne);
router.post("/", authUser, create);
router.put("/:id", authUser, update);
router.delete("/:id", authUser, remove);

module.exports = router;