import { createSlice } from "@reduxjs/toolkit";

const initialCart =
  typeof window !== "undefined" &&
  typeof localStorage !== "undefined" &&
  localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [];
const price =
  typeof window !== "undefined" &&
  typeof localStorage !== "undefined" &&
  initialCart?.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: initialCart,
    totalPrice: price,
  },
  reducers: {
    getAllCartPrice: (state) => {
      state.totalPrice = state.cart.reduce((total, item) => {
        return total + item.price * item.quantity;
      }, 0);
    },
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
      state.totalPrice = state.cart.reduce((total, item) => {
        return total + item.price * item.quantity;
      }, 0);
    },
    removeFromCart: (state, action) => {
      const { id } = action.payload;
      state.cart = state.cart.filter((item) => item.id !== id);

      localStorage.setItem("cart", JSON.stringify(state.cart));
      state.totalPrice = state.cart.reduce((total, item) => {
        return total + item.price * item.quantity;
      }, 0);
    },
    clearCart: (state) => {
      state.cart = [];

      localStorage.setItem("cart", JSON.stringify([]));
      state.totalPrice = state.cart.reduce((total, item) => {
        return total + item.price * item.quantity;
      }, 0);
    },
  },
});

export const { addToCart, getAllCartPrice, removeFromCart, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
