import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "./basketSlice";
import restauranReducer from "./restaurantSlice";


export const store = configureStore({
  reducer:{
    basket:basketReducer,
    restaurant: restauranReducer
  },
})