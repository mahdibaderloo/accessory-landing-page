import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload);
    },

    removeItem(state, action) {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },

    increaseItemCount(state, action) {
      const item = state.cart.find((item) => item.id === action.payload);

      item.count++;
    },

    decreaseItemCount(state, action) {
      const item = state.cart.find((item) => item.id === action.payload);

      item.count--;
      if (item.count === 0) cartSlice.caseReducers.removeItem(state, action);
    },

    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  removeItem,
  increaseItemCount,
  decreaseItemCount,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
