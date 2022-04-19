import React, { useEffect, useState } from "react";
import UsersTable from "./UsersTable";
import { useDispatch } from "react-redux";
import { addUserToggleAction } from "../../store/addUserToggle";
import { updateUserToggleAction } from "../../store/updateUserToggle";
import UpdateUser from "./UpdateUser";
import AddUser from "./AddUser";
import useUsers from "../../hooks/useUsers";

const Users = () => {
  const [userTable, setUserTable] = useState({});
  const [userIdTable, setUserIdTable] = useState();
  const { users, deleteUser, updateUser } = useUsers();
  const dispatch = useDispatch();

  const { toggle: toggleAdd } = addUserToggleAction;
  const { toggle: toggleUpdate } = updateUserToggleAction;

  const addUserHandler = () => {
    dispatch(toggleAdd());
  };

  const updateUserToggleHandler = () => {
    dispatch(toggleUpdate());
  };

  const userTableDataHandler = (id, user) => {
    setUserIdTable(id);
    setUserTable(user);
  };

  useEffect(() => {
    users;
  }, [users]);

  return (
    <React.Fragment>
      <AddUser />
      <UpdateUser id={userIdTable} user={userTable} />
      <div className="h-[100vh] w-full flex justify-center items-center">
        <div className="p-[1rem] rounded bg-[rgba(0,0,0,0.20)] border-2 border-[rgba(119,0,255,0.85)] shadow-[0_0_20px_1px_rgba(255,255,255,0.1)] mt-[5rem] m-auto min-h-[50rem] w-[70%]">
          <button
            onClick={addUserHandler}
            className="text-white mb-[2rem]  bg-[rgba(119,0,255,0.85)] h-[2.2rem] rounded w-[6rem] transition-all duration-[0.3s] ease-in-out hover:bg-[rgb(161,93,240)]"
          >
            Add User
          </button>
          <UsersTable
            users={users}
            deleteUser={deleteUser}
            updateUser={updateUser}
            toggleUpdate={updateUserToggleHandler}
            userTableData={userTableDataHandler}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Users;
