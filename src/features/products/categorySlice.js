import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: "all",
};

const categorySlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    showCategoryItems(state, action) {
      state.category = action.payload;
    },
  },
});

export const { showCategoryItems } = categorySlice.actions;
export default categorySlice.reducer;
