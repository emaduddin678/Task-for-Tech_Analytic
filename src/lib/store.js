import { configureStore } from "@reduxjs/toolkit";
import viewReducer from "./features/views/viewsSlice";
import cartReducer from "./features/products/cartSlice";
import currentPageReducer from "./features/currenPage/pageSlice";

const store = () => {
  return configureStore({
    reducer: {
      viewReducer: viewReducer,
      cartReducer: cartReducer,
      currentPageReducer: currentPageReducer,
    },
  });
};

export default store;
