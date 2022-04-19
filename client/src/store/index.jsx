import { configureStore } from "@reduxjs/toolkit";
import addUserToggleReducer from "./addUserToggle";
import updateUserReducer from "./updateUserToggle";

const store = configureStore({
  reducer: {
    addUserToggle: addUserToggleReducer,
    updateUserToggle: updateUserReducer,
  },
});

export default store;
