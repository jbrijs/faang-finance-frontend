import { PredictionsResponse } from "@/services/model";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchPredictions } from "./thunks";

export interface HomePageState {
  loading: boolean;
  error: string | null;
  predictions: PredictionsResponse[] | null;
  deltaAsDollar: boolean;
}

const initialState: HomePageState = {
  loading: false,
  error: null,
  predictions: null,
  deltaAsDollar: false,
};

export const homePage = createSlice({
  name: "homePage",
  initialState,
  reducers: {
    switchDelta: (state) => {
      state.deltaAsDollar = !state.deltaAsDollar;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchPredictions.pending, state => {
      state.loading = true;
    })
    .addCase(fetchPredictions.fulfilled, (state, action) => {
      state.loading = false;
      state.predictions = action.payload
    })
    .addCase(fetchPredictions.rejected, (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.error = action.payload
    })
  }
});

// Action creators are generated for each case reducer function
export const { switchDelta } = homePage.actions;

export default homePage.reducer;
