const { getAllUsers, addNewUser } = require("../models/users.model");

function httpGetAllUsers(req, res) {
  return res.status(200).json(getAllUsers());
}

function httpAddNewUser(req, res) {
  const user = req.body;

  typeof user.age !== "number";

  if (!user.name || !user.age || !user.email || typeof user.age !== "number") {
    return res.status(400).json({ error: "Missing input or invalid input" });
  }

  addNewUser(user);
  return res.status(201).json(user);
}

module.exports = {
  httpGetAllUsers,
  httpAddNewUser,
};
