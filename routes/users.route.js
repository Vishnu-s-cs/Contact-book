const router = require("express").Router();
const { verify } = require("../middleware/verifyToken");
const { getUser, getAllUsers } = require("../controllers/users.controller");

//get a contact with simple jwt verification
router.get("/:id", verify, getUser);

//get all contacts with simple verification
router.get("/", verify, getAllUsers);

module.exports = router;
