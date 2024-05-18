import { createSlice } from "@reduxjs/toolkit";

export const filterSearch = createSlice({
  name: "filter",
  initialState: {
    search: "",
  },
  reducers: {
    searchFilter: (state, action) => {
      state.search = action.payload;
    },
  },
});

export const { searchFilter } = filterSearch.actions;
export default filterSearch.reducer;
