import { createSlice } from "@reduxjs/toolkit";


const initialState = { favorite: [] };

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addToFav(state, action) {
      state.favorite = !state.favorite.includes(action.payload)
        ? [...state.favorite, action.payload]
        : "";
    },
    removeFromFav(state, action) {
      state.favorite = [
        ...state.favorite.filter((item) => item.id !== action.payload),
      ];
    },
  },
});

export const favoriteActions = favoriteSlice.actions;
export default favoriteSlice.reducer;
