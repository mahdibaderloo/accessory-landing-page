import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  left: "-120%",
};

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    openSidebar(state, action) {
      state.isOpen = true;
      state.left = action.payload;
    },
    closeSidebar(state) {
      state.isOpen = false;
      state.left = initialState.left;
    },
  },
});

export const { openSidebar, closeSidebar } = sidebarSlice.actions;
export default sidebarSlice.reducer;
