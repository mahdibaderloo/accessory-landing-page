import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  onConfirm: null,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal(state, action) {
      state.isOpen = true;
      state.onConfirm = action.payload.onConfirm || null;
    },
    closeModal(state) {
      state.isOpen = false;
      state.onConfirm = null;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
