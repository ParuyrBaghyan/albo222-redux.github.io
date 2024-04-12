import { createSlice } from "@reduxjs/toolkit";

const initialState = { money: 0, total: 0 };

const moneySlice = createSlice({
  name: "money",
  initialState,
  reducers: {
    countTheMoney(state, action) {
      state.money = action.payload.quanity * action.payload.price;
    },
    totalForApp(state, action) {
      state.total = state.total + action.payload.data * action.payload.quanity;
    },

    totalForCountsReduce1(state, action) {
      state.total = state.total - action.payload.data;
    },
    totalForCountsReduce2(state, action) {
      state.total = state.total - action.payload.data / 4;
    },
    totalForCountsAdd1(state, action) {
      state.total = state.total + action.payload.data;
    },
    totalForCountsAdd2(state, action) {
      state.total = state.total + action.payload.data / 4;
    },

    totalForCart(state, action) {
      state.total = state.total - action.payload.price * action.payload.quanity;
    },
  },
});

export const moneyActions = moneySlice.actions;
export default moneySlice.reducer;
