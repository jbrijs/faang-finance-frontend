import { PredictionDataResponse } from "@/services/model";
import { createSlice } from "@reduxjs/toolkit";

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
  ticker: null
};

export const dataPage = createSlice({
  name: "dataPage",
  initialState,
  reducers: {
    setString: (state, action) => {
        state.ticker = action.payload
    }
  },
  extraReducers(builder) {
    builder.addCase()
  }
});

export default dataPage.reducer;
