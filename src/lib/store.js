import { configureStore } from "@reduxjs/toolkit";
import viewReducer from "./features/views/viewsSlice";
import cartReducer from "./features/products/cartSlice";
import currentPageReducer from "./features/currenPage/pageSlice";
import filterReducer from "./features/filterSearch/filterSearch";
import  checkedReducer  from "./features/checkedCart/ceckedCart";

const store = () => {
  return configureStore({
    reducer: {
      viewReducer: viewReducer,
      cartReducer: cartReducer,
      currentPageReducer: currentPageReducer,
      filterReducer: filterReducer,
      checkedReducer: checkedReducer,
    },
  });
};

export default store;
