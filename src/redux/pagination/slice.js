import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  page: 1,
  count: 4,
};

const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    setPagination: (state, action) => {
      state.page += action.payload;
      state.count = action.payload * 4;
    },
  },
});

export const { setPagination } = paginationSlice.actions;
export const paginationReducer = paginationSlice.reducer;
