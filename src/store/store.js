import { configureStore } from "@reduxjs/toolkit";
import favoriteReducer from "./favorite-slice";
import categoryReducer from "./category-slice";
import moneyReducer from './money-slice'
import cartReducer from './cart-slice'
const store = configureStore({
  reducer: {
    favorite: favoriteReducer,
    category: categoryReducer,
    money : moneyReducer,
    cart : cartReducer
  },
});

export default store;
