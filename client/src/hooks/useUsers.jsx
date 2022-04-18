import { useCallback, useEffect, useState } from "react";

import { httpGetUsers, httpSubmitUser } from "./requests";

function useUsers() {
  const [users, saveUsers] = useState([]);

  const getUsers = useCallback(async () => {
    const fetchedUsers = await httpGetUsers();
    saveUsers(fetchedUsers);
  }, []);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  const submitUser = useCallback(async (user) => {
    return await httpSubmitUser(user);
  }, []);

  return {
    users,
    submitUser,
  };
}
export default useUsers;
