import { createSlice } from "@reduxjs/toolkit";

export const checkedSlice = createSlice({
  name: "checked",
  initialState: {
    checked: false,
  },
  reducers: {
    checkedFunc: (state) => {
      state.checked = !state.checked;
    },
  },
});

export const { checkedFunc } = checkedSlice.actions;
export default checkedSlice.reducer;
