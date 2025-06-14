import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeSection: "profile",
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setActiveSection(state, action) {
      state.activeSection = action.payload;
    },
  },
});

export const { setActiveSection, setUserInfo } = profileSlice.actions;
export default profileSlice.reducer;
