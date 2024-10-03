import { RootState } from "@/app/store";
import { Service } from "@/services/services";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPredictionData = createAsyncThunk(
  "data/fetchPredictionData",
  async (_, { getState, rejectWithValue }) => {
    const { dataPage } = getState() as RootState;

    try {
      if (dataPage.ticker) {
        const response = await Service.getPredictionData(dataPage.ticker);
        return response;
      } else {
        return rejectWithValue("Error: no ticker provided");
      }
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);
