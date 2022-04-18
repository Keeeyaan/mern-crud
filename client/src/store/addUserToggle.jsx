import { createSlice } from "@reduxjs/toolkit";

const addUserToggleSlice = createSlice({
  name: "addUserToggle",
  initialState: {
    toggle: false,
  },
  reducers: {
    toggle: (state) => {
      state.toggle = state.toggle ? false : true;
    },
  },
});

export const addUserToggleAction = addUserToggleSlice.actions;
export default addUserToggleSlice.reducer;
