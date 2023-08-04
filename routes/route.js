const express = require("express");

const router = express.Router();
const signup = require("../controller/signUp");
const login = require("../controller/login");
const getuser = require("../controller/getuser");
const deleteUser = require("../controller/deleteuser");

router.post("/api/v1/signup", signup);

router.post("/api/v1/login", login);

router.get("/api/admin/users", getuser);
router.delete("/api/admin/users:email", deleteUser);

module.exports = router;
