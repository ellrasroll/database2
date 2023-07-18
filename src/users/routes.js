const { Router } = require("express");
const userRouter = Router();

const {registerUser, getUsers, login} = require("./controllers");
const { hashPass, comparePass } = require("../middleware");

userRouter.post("/users/register", hashPass, registerUser)
userRouter.get("/users/getallusers", hashPass, getUsers)

userRouter.post("/users/login", comparePass, login)

module.exports = userRouter