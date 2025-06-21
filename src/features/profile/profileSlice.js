import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeSection: "profile",
  user: [],
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setActiveSection(state, action) {
      state.activeSection = action.payload;
    },
    setUser(state, action) {
      state.user = action.payload;
    },
  },
});

export const { setActiveSection, setUser } = profileSlice.actions;
export default profileSlice.reducer;
