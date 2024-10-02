import { PredictionsResponse } from "@/services/model";
import { createSlice } from "@reduxjs/toolkit";

export interface HomePageState {
  loading: boolean;
  error: string | undefined;
  predictions: PredictionsResponse[] | undefined;
  deltaAsDollar: boolean;
}

const initialState: HomePageState = {
  loading: false,
  error: undefined,
  predictions: undefined,
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
});

// Action creators are generated for each case reducer function
export const { switchDelta } = homePage.actions;

export default homePage.reducer;
