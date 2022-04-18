const users = new Map();

let userId = 0;

users.set(null, {
  name: "Mark Rey Ronolo",
  age: 21,
  email: "ronolomark@gmail.com",
  id: userId,
});

function getAllUsers() {
  return Array.from(users.values());
}

function addNewUser(user) {
  userId++;
  users.set(userId, Object.assign(user, { id: userId }));
}

//ANG PATCH USER UG DELETE USER

module.exports = { getAllUsers, addNewUser };
