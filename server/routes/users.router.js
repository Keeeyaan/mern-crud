const express = require("express");

const {
  httpGetAllUsers,
  httpAddNewUser,
  httpDeleteUser,
  httpUpdateUser,
} = require("./users.controller");

const usersRouter = express.Router();

usersRouter.get("/", httpGetAllUsers);
usersRouter.post("/", httpAddNewUser);
usersRouter.put("/:id", httpUpdateUser);
usersRouter.delete("/:id", httpDeleteUser);

module.exports = usersRouter;
