import { createSlice } from "@reduxjs/toolkit";

const initialState = { activeCat: "" };

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setActiveCat(state, action) {
      state.activeCat = action.payload;
    },
  },
});
export const categoryActions = categorySlice.actions;
export default categorySlice.reducer;
