const express = require("express");

const { httpGetAllUsers, httpAddNewUser } = require("./users.controller");

const usersRouter = express.Router();

usersRouter.get("/", httpGetAllUsers);
usersRouter.post("/", httpAddNewUser);

module.exports = usersRouter;
