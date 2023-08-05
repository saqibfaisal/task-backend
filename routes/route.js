const express = require("express");

const router = express.Router();
const signup = require("../controller/signUp");
const login = require("../controller/login");
const getuser = require("../controller/getuser");
const deleteUser = require("../controller/deleteuser");
const logout = require("../controller/signout");
const editUser = require("../controller/edituser");

router.post("/api/v1/signup", signup);

router.post("/api/v1/login", login);

router.get("/api/v1/logout", logout);

router.get("/api/admin/users", getuser);

router.delete("/api/admin/users/:id", deleteUser);

router.put("/api/admin/users/:id", editUser);

module.exports = router;
