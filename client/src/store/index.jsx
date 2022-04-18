import { configureStore } from "@reduxjs/toolkit";
import addUserToggleReducer from "./addUserToggle";

const store = configureStore({
  reducer: { addUserToggle: addUserToggleReducer },
});

export default store;
