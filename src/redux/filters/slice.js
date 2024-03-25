import { createSlice } from "@reduxjs/toolkit";

const filtersInitialState = {
  items: [],
};

const filtersSlice = createSlice({
  name: "filters",
  initialState: filtersInitialState,
  reducers: {
    setFilters: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const { setFilters } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
