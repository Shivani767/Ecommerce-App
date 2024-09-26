const router = require("express").Router();
const SignupController = require("../Controllers/Signup");
const LoginController = require("../Controllers/Login");

router.post('/signup',SignupController.signup)
router.post('/login',LoginController.login)


module.exports = router;