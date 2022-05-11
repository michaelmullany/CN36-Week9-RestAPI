const { Router } = require("express");
const { addUser, getUser } = require("./userControllers");
const { hashPass, comparePass } = require("../middleware");

const userRouter = Router();

// use http verb post to add data to our movie endpoint
userRouter.post("/user", hashPass, addUser);
userRouter.get("/user/login", getUser, comparePass);

module.exports = userRouter;