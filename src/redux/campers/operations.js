import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://657e02db3e3f5b1894636ed3.mockapi.io/camper";

export const fetchCampers = createAsyncThunk("campers/fetchAll", async (_, thunkAPI) => {
  try {
    const response = await axios.get("/adverts");
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const fetchCamperById = createAsyncThunk("campers/fetchById", async (id, thunkAPI) => {
  try {
    const response = await axios.get(`/adverts/${id}`);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const fetchRefreshCampers = createAsyncThunk("campers/refresh", async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const persistedData = JSON.parse(state?.persist?.campers);

  if (persistedData?.items?.length > 0) {
    return persistedData.items;
  } else {
    try {
      const response = await axios.get("/adverts");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
});
