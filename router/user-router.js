const express = require("express");
const userController = require("../controllers/users-controller");
const userRouter = express.Router();

userRouter.post("/register", userController.register);
userRouter.post("/login", userController.login);
userRouter.put("/edit/:id", userController.edit);

module.exports = userRouter;
