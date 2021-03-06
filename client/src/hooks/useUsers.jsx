import { useCallback, useEffect, useState } from "react";

import {
  httpDeleteUser,
  httpGetUsers,
  httpSubmitUser,
  httpUpdateUser,
} from "./requests";

function useUsers() {
  const [users, saveUsers] = useState([]);

  const getUsers = useCallback(async () => {
    const fetchedUsers = await httpGetUsers();
    saveUsers(fetchedUsers);
  }, []);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  const submitUser = useCallback(
    async (user) => {
      const response = await httpSubmitUser(user);

      const success = response.ok;
      if (success) {
        return getUsers();
      }
    },
    [getUsers]
  );

  const updateUser = useCallback(
    async (id, user) => {
      const response = await httpUpdateUser(id, user);

      const success = response.ok;
      if (success) {
        return getUsers();
      }
    },
    [getUsers]
  );

  const deleteUser = useCallback(
    async (id) => {
      const response = await httpDeleteUser(id);

      const success = response.ok;
      if (success) {
        getUsers();
      }
    },
    [getUsers]
  );

  return {
    users,
    submitUser,
    deleteUser,
    updateUser,
  };
}
export default useUsers;
