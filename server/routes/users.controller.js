const {
  getAllUsers,
  addNewUser,
  deleteUserById,
  existsUserWithId,
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
  console.log(+req.params.id)
  const userId = +req.params.id;
  if (!existsUserWithId(userId)) {
    return res.status(404).json({
      error: "User not found!",
    });
  }
  const deleted = deleteUserById(userId);
  return res.status(200).json(deleted);
}

module.exports = {
  httpGetAllUsers,
  httpAddNewUser,
  httpDeleteUser,
};
