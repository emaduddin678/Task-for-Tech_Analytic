import { configureStore } from "@reduxjs/toolkit";
import viewReducer from "./features/views/viewsSlice";
import cartReducer from "./features/products/cartSlice";

const store = () => {
  return configureStore({
    reducer: {
      viewReducer: viewReducer,
      cartReducer: cartReducer,
    },
  });
};

export default store;
