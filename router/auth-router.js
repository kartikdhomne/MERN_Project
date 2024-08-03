const express = require("express");
const router = express.Router();
const authController = require("../controller/auth-controller")

// router.get("/", (req, res) => {
//   res.status(200).send("Welcome to Homepage Kartik using router");
// });

// or 

router.route("/").get(authController.home);
router.route("/register").post(authController.register);

module.exports = router;