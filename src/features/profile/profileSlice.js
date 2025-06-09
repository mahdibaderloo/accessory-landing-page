import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: [],
  activeSection: "profile",
  isLoading: false,
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setActiveSection(state, action) {
      state.activeSection = action.payload;
      state.isLoading = false;
    },
  },
});

export const { setActiveSection } = profileSlice.actions;
export default profileSlice.reducer;
