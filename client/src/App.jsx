import React from "react";
import Users from "./components/Users/Users";
import AddUser from "./components/Users/AddUser";

const App = () => {
  return (
    <React.Fragment>
      <AddUser />
      <Users />
    </React.Fragment>
  );
};

export default App;
