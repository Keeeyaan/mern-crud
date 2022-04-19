import React from "react";

const UsersTable = ({
  users,
  deleteUser,
  updateUser,
  toggleUpdate,
  userTableData,
}) => {
  const clickUpdateHander = (id, user) => {
    toggleUpdate();
    userTableData(id, { name: user.name, age: user.age, email: user.email });
  };

  return (
    <table
      cellPadding={10}
      className=" text-center h-auto w-full border text-white border-white"
    >
      <thead className=" border border-white">
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
          <th>Email</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.age}</td>
            <td>{user.email}</td>
            <td>
              <button
                onClick={() =>
                  clickUpdateHander(user.id, {
                    name: user.name,
                    age: user.age,
                    email: user.email,
                  })
                }
                className=" mr-[0.5rem] text-white border-2 border-[rgba(119,0,255,0.85)] py-[0.20rem] rounded px-[1rem] transition-all duration-[0.3s] ease-in-out hover:bg-[rgb(161,93,240)]"
              >
                Update
              </button>
              <button
                onClick={() => deleteUser(user.id)}
                className=" text-white border-2 border-[rgba(119,0,255,0.85)] py-[0.20rem] rounded px-[1rem] transition-all duration-[0.3s] ease-in-out hover:bg-[rgb(161,93,240)]"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UsersTable;
