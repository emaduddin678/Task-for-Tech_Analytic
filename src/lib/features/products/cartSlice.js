import { createSlice } from "@reduxjs/toolkit";

// Load cart state from localStorage or use an empty array as initial state
// const initialCart = typeof localStorage !== 'undefined' && localStorage.getItem("cart")
//   ? JSON.parse(localStorage.getItem("cart"))
//   : [];
const initialCart =
  typeof window !== "undefined" &&
  typeof localStorage !== "undefined" &&
  localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [];


export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: initialCart,
  },
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.cart.find(
        (cartItem) => cartItem.id === item.id
      );

      if (existingItem) {
        existingItem.quantity += 1; 
      } else {
        state.cart.push({ ...item, quantity: 1 }); 
      }

      
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    removeFromCart: (state, action) => {
      const { id } = action.payload;
      state.cart = state.cart.filter((item) => item.id !== id); // Remove item from cart by id

      // Update localStorage with the updated cart state
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    clearCart: (state) => {
      state.cart = []; // Clear the entire cart

      // Update localStorage with an empty cart
      localStorage.setItem("cart", JSON.stringify([]));
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
