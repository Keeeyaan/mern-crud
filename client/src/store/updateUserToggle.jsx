import { createSlice } from "@reduxjs/toolkit";

const updateUserToggleSlice = createSlice({
  name: "updateUserToggle",
  initialState: {
    toggle: false,
  },
  reducers: {
    toggle: (state) => {
      state.toggle = state.toggle ? false : true;
    },
  },
});

export const updateUserToggleAction = updateUserToggleSlice.actions;
export default updateUserToggleSlice.reducer;
