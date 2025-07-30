import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: JSON.parse(localStorage.getItem("cart")) || [],
  subTotal: JSON.parse(localStorage.getItem("cart"))
    .reduce((acc, cur) => acc + cur.totalPrice, 0)
    .toFixed(2),
  deliveryPrice: 15,
  status: "idle",
  isEmpty: JSON.parse(localStorage.getItem("cart")) ? false : true,
};

function calcSubTotal(subTotal, cart) {
  subTotal = cart.reduce((acc, cur) => acc + cur.totalPrice, 0).toFixed(2);
  return subTotal;
}

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
      state.subTotal = calcSubTotal(state.subTotal, state.cart);

      setToLocalStorage(state.cart);
    },

    removeItem(state, action) {
      state.cart = state.cart.filter((item) => item.id !== action.payload);

      if (state.cart.length < 1) {
        state.isEmpty = true;
      }
      state.subTotal = calcSubTotal(state.subTotal, state.cart);

      setToLocalStorage(state.cart);
    },

    increaseItemCount(state, action) {
      const item = state.cart.find((item) => item.id === action.payload);

      item.count++;
      item.totalPrice = item.price * item.count;
      state.isEmpty = false;
      state.subTotal = calcSubTotal(state.subTotal, state.cart);

      setToLocalStorage(state.cart);
    },

    decreaseItemCount(state, action) {
      const item = state.cart.find((item) => item.id === action.payload);

      item.count--;
      item.totalPrice = item.price * item.count;
      state.subTotal = calcSubTotal(state.subTotal, state.cart);

      if (item.count === 0) cartSlice.caseReducers.removeItem(state, action);

      setToLocalStorage(state.cart);
    },

    clearCart(state) {
      state.cart = [];
      state.isEmpty = true;
      state.subTotal = 0;

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
