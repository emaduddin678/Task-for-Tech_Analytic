import { createSlice } from "@reduxjs/toolkit";

export const currentPageSlice = createSlice({
  name: "currentPage",
  initialState: {
    currentPage: 1,
  },
  reducers: {
    pageChange: (state, action) => {
      state.currentPage = action.payload;
    },
   
  },
});

export const { pageChange } = currentPageSlice.actions;
export default currentPageSlice.reducer;
