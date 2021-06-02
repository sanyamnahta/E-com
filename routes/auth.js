const express = require('express');
var router = express.Router();
const { check } = require('express-validator');
const { signout, signup, signin, isSignedIn} =  require("../controllers/auth")

router.post("/signup", [
    check("name", "name shd be atleast 3 character").isLength({ min: 3 }),
    check("email", "email is required").isEmail(),
    check("password", "pass shd be atleast 3 character").isLength({ min: 3 })],
signup);

router.post("/signin", [
    check("email", "email is required").isEmail(),
    check("password", "pass field is required ").isLength({ min: 1 })],
signin);
    
router.get("/signout", signout);

router.get("/testroute", isSignedIn, (req, res) => {
    res.send("a protected route");
});

module.exports =router;


  