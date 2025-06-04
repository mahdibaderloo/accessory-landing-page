import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./src/components/sidebarSlice";
import profileReducer from "./src/features/user/profileSlice";

const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    profile: profileReducer,
  },
});

export default store;
