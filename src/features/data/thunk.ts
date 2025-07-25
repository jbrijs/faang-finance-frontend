import { RootState } from "@/app/store";
import { PredictionDataResponse } from "@/services/model";
import { Service } from "@/services/services";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPredictionData = createAsyncThunk(
  "data/fetchPredictionData",
  async (_, { getState, rejectWithValue }) => {
    const { dataPage } = getState() as RootState;

    try {
      if (dataPage.ticker) {
        const response = await Service.getPredictionData(dataPage.ticker);
        const filteredResponse = response?.filter(
          (p) =>
            p.actual !== null &&
            p.actual !== undefined &&
            !Number.isNaN(p.actual) &&
            p.prediction !== null &&
            p.prediction !== undefined &&
            !Number.isNaN(p.prediction) &&
            p.timeStamp
        );
        if (!filteredResponse?.length) {
          return [] as PredictionDataResponse[]
        }
        return filteredResponse;
      } else {
        return rejectWithValue("Error: no ticker provided");
      }
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);
