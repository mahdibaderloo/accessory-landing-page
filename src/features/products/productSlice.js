import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  size: 30,
  color: "Black",
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    chooseSize(state, action) {
      state.size = action.payload;
    },
    chooseColor(state, action) {
      state.color = action.payload;
    },
  },
});

export const { chooseSize, chooseColor } = productSlice.actions;

export default productSlice.reducer;
