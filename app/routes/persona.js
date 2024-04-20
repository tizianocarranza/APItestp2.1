const router = require("express").Router()
const { getAll, findOne, create, update, remove } = require("../controllers/persona");

router.get("/", getAll);
router.get("/:id", findOne);
router.post("/", create);
router.put("/:id", update);
router.delete("/:id", remove);

module.exports = router;