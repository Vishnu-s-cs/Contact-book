const router = require("express").Router();
const { register, userLogin } = require("../controllers/auth.controller");
const validateUser = require("../middleware/schemaValidate");
const schemas = require("../schema-validate/auth.schema");

//Add contact with joi validation
router.post("/register", validateUser(schemas.createUser), register);

//LOGIN
router.post("/login", validateUser(schemas.userLogin), userLogin);

module.exports = router;
