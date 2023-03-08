const router = require("express").Router();
const { verify, verifyTokenAndAuthorization} = require("../middleware/verifyToken");
const { getUser, getAllUsers } = require("../controllers/users.controller");

//get a contact with simple jwt verification
router.get("/:id", verify, getUser);

//get all contacts with simple verification
router.get("/", verify, getAllUsers);

//update user with verify the user is updating his own data
router.put("/:id",verifyTokenAndAuthorization,updateUser);

//delete user with verify the user is deleting his own data
router.delete("/:id", verifyTokenAndAuthorization,deleteUser);

module.exports = router;
