import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: JSON.parse(localStorage.getItem("cart")) || [],
  status: "idle",
  isEmpty: JSON.parse(localStorage.getItem("cart")) ? false : true,
};

function setToLocalStorage(cart) {
  localStorage.removeItem("cart");
  localStorage.setItem("cart", JSON.stringify(cart));
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload);
      state.isEmpty = false;

      setToLocalStorage(state.cart);
    },

    removeItem(state, action) {
      state.cart = state.cart.filter((item) => item.id !== action.payload);

      if (state.cart.length === 0) {
        state.isEmpty = true;
      }

      setToLocalStorage(state.cart);
    },

    increaseItemCount(state, action) {
      const item = state.cart.find((item) => item.id === action.payload);

      item.count++;
      item.totalPrice = item.price * item.count;
      state.isEmpty = false;

      setToLocalStorage(state.cart);
    },

    decreaseItemCount(state, action) {
      const item = state.cart.find((item) => item.id === action.payload);

      item.count--;
      item.totalPrice = item.price * item.count;
      if (item.count === 0) cartSlice.caseReducers.removeItem(state, action);

      setToLocalStorage(state.cart);
    },

    clearCart(state) {
      state.cart = [];
      state.isEmpty = true;

      setToLocalStorage(state.cart);
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
