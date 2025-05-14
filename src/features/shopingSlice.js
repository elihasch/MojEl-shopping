import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const item = action.payload;
      const exists = state.items.find((i) => i.id === item.id);
      if (exists) {
        exists.quantity += 1;
      } else {
        state.items.push({ ...item, quantity: 1 });
      }
    },
    increaseQuantity: (state, action) => {
      const item = state.items.find((i) => i.id === action.payload);
      if (item) item.quantity += 1;
    },
    decreaseQuantity: (state, action) => {
      const item = state.items.find((i) => i.id === action.payload);
      if (item) {
        item.quantity -= 1;
        if (item <= 0) {
          state.items.filter((i) => i.id !== action.payload);
        }
      }
    },
    removeItem: (state, action) => {
      const id = action.payload;
      state.items = state.items.filter((item) => item.id !== id);
    },
  },
});
export const {
  addItem,
  increaseQuantity,
  decreaseQuantity,
  removeItem,
} = counterSlice.actions;

export default counterSlice.reducer;
