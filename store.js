import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./src/components/sidebarSlice";

const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
  },
});

export default store;
