import { createSlice } from "@reduxjs/toolkit";

const initialView = {
  grid: true,
};

export const viewSlice = createSlice({
  name: "view",
  initialState: initialView,
  reducers: {
    changeView: (state) => {
      state.grid = !state.grid;
    },
  },
});

export const { changeView } = viewSlice.actions;
export default viewSlice.reducer;
