import { configureStore } from "@reduxjs/toolkit";
import showCategoriesReducer from "./showCategoriesSlice";

export const store = configureStore({
  reducer: {
    showCategories: showCategoriesReducer,
  },
});