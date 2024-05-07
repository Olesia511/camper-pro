import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://657e02db3e3f5b1894636ed3.mockapi.io/camper";

export const fetchTotalNumberCampers = createAsyncThunk("campers/fetchTotalNumber", async (_, thunkAPI) => {
  try {
    const resp = await axios.get("/adverts");
    return resp.data.length;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const fetchCampersPage = createAsyncThunk("campers/fetchNextPage", async (page = 1, thunkAPI) => {
  try {
    const response = await axios.get(`/adverts?page=${page}&limit=${4}`);

    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const fetchRefreshCampers = createAsyncThunk("campers/refresh", async (_, thunkAPI) => {
  const state = thunkAPI.getState();

  const persistedData = JSON.parse(state?.campers);

  if (persistedData?.items?.length > 0) {
    return persistedData.items;
  } else {
    try {
      const response = fetchCampersPage();
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
});
