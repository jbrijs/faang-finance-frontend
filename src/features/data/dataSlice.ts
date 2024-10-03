import { PredictionDataResponse } from "@/services/model";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchPredictionData } from "./thunk";

export interface DataState {
  loading: boolean;
  error: string | null;
  data: PredictionDataResponse[] | null;
  ticker: string | null;
}

const initialState: DataState = {
  loading: true,
  error: null,
  data: null,
  ticker: null,
};

export const dataPage = createSlice({
  name: "dataPage",
  initialState,
  reducers: {
    setTicker: (state, action) => {
      state.ticker = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchPredictionData.pending, (state) => {
        state.loading = true;
        state.data = null;
      })
      .addCase(fetchPredictionData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(
        fetchPredictionData.rejected,
        (state, action: PayloadAction<any>) => {
          state.loading = false;
          state.error = action.payload;
        }
      );
  },
});

export const { setTicker } = dataPage.actions;
export default dataPage.reducer;
