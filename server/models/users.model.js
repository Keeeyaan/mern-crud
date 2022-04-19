const users = new Map();

let userId = 0;

const user = {
  id: 0,
  name: "Mark Rey Ronolo",
  age: 21,
  email: "ronolomark@gmail.com",
  deleted: false,
};

users.set(user.id, user);

function existsUserWithId(userId) {
  return users.has(userId);
}

function getAllUsers() {
  return Array.from(users.values());
}

function addNewUser(user) {
  userId++;
  users.set(userId, Object.assign(user, { id: userId, deleted: false }));
}

//PATCH USER NEXT
function deleteUserById(userId) {
  return users.delete(userId);
  // const userDeleted = users.get(userId);
  // userDeleted.deleted = true;
  // return userDeleted;
}

function updateUserById(userId, user) {
  const updatedUser = users.get(userId);
  updatedUser.name = user.name;
  updatedUser.age = user.age;
  updatedUser.email = user.email;
  return updatedUser;
}

module.exports = {
  getAllUsers,
  addNewUser,
  existsUserWithId,
  deleteUserById,
  updateUserById,
};
