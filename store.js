import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./src/components/sidebarSlice";
import profileReducer from "./src/features/profile/profileSlice";
import categoryReducer from "./src/features/products/categorySlice";

const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    profile: profileReducer,
    category: categoryReducer,
  },
});

export default store;
