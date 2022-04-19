const API_URL = "http://localhost:8000";

async function httpGetUsers() {
  const response = await fetch(`${API_URL}/users`);
  const fetchUsers = await response.json();
  return fetchUsers.sort((a, b) => {
    return a.id - b.id;
  });
}

async function httpSubmitUser(user) {
  try {
    return await fetch(`${API_URL}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
  } catch (error) {
    return {
      ok: false,
    };
  }
}

async function httpUpdateUser(id, user) {
  try {
    return await fetch(`${API_URL}/users/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
  } catch (error) {
    return {
      ok: false,
    };
  }
}

async function httpDeleteUser(id) {
  try {
    return await fetch(`${API_URL}/users/${id}`, {
      method: "DELETE",
    });
  } catch (error) {
    return {
      ok: false,
    };
  }
}

export { httpGetUsers, httpSubmitUser, httpDeleteUser, httpUpdateUser };
