import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  page: 1,
};

const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    changePagination: (state, action) => {
      state.page += 1;
    },
  },
});

export const { changePagination } = paginationSlice.actions;
export const paginationReducer = paginationSlice.reducer;
