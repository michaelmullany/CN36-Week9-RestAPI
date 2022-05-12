const { Router } = require("express");
const { addUser, getUser, listUsers, updateUser, deleteUser } = require("./userControllers");
const { checkEmailValid, checkEmailValidUpdate, hashPass, comparePass } = require("../middleware");

const userRouter = Router();

// use http verb post to add data to our movie endpoint
userRouter.get("/login", getUser, comparePass);

userRouter.post("/user", checkEmailValid, hashPass, addUser);
userRouter.get("/user", listUsers);
userRouter.put("/user", checkEmailValidUpdate, updateUser);
userRouter.delete("/user", deleteUser);

module.exports = userRouter;