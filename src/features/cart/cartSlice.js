import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  totalPrice: 0,
  status: "idle",
  isEmpty: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload);
      state.isEmpty = false;
    },

    removeItem(state, action) {
      state.cart = state.cart.filter((item) => item.id !== action.payload);

      if (state.cart.length === 0) {
        state.isEmpty = true;
      }
    },

    increaseItemCount(state, action) {
      const item = state.cart.find((item) => item.id === action.payload);

      item.count++;
      state.isEmpty = false;
    },

    decreaseItemCount(state, action) {
      const item = state.cart.find((item) => item.id === action.payload);

      item.count--;
      if (item.count === 0) cartSlice.caseReducers.removeItem(state, action);
    },

    clearCart(state) {
      state.cart = [];
      state.isEmpty = true;
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
