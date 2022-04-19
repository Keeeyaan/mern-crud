const {
  getAllUsers,
  addNewUser,
  deleteUserById,
  existsUserWithId,
  updateUserById,
} = require("../models/users.model");

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

function httpDeleteUser(req, res) {
  const userId = +req.params.id;
  if (!existsUserWithId(userId)) {
    return res.status(404).json({
      error: "User not found!",
    });
  }
  const deleted = deleteUserById(userId);
  return res.status(200).json(deleted);
}

function httpUpdateUser(req, res) {
  const userId = +req.params.id;
  const user = req.body;

  if (!existsUserWithId(userId)) {
    return res.status(404).json({
      error: "User not found!",
    });
  }

  const updated = updateUserById(userId, user);
  return res.status(200).json(updated);
}

module.exports = {
  httpGetAllUsers,
  httpAddNewUser,
  httpDeleteUser,
  httpUpdateUser,
};
