import { createSlice } from "@reduxjs/toolkit";

const showCategoriesSlice = createSlice({
  name: "showCategories",
  initialState: {
    open: false,
  },
  reducers: {
    setShowCategories: (state, action) => {
      state.open = action.payload;
    },
  },
});

export const { setShowCategories } = showCategoriesSlice.actions;
export default showCategoriesSlice.reducer;