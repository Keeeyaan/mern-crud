const API_URL = "http://localhost:8000";

async function httpGetUsers() {
  const response = await fetch(`${API_URL}/users`);
  const fetchUsers = await response.json();
  return fetchUsers.sort((a, b) => {
    return a.id - b.id;
  });
}

async function httpSubmitUser(user) {
  return await fetch(`${API_URL}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
}

export { httpGetUsers, httpSubmitUser };
