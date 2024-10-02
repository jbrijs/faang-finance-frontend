import { PredictionsResponse } from '@/services/model';
import { createSlice } from '@reduxjs/toolkit'

export interface HomePageState {
    loading: boolean;
    error: string | undefined;
    predictions: PredictionsResponse[] | undefined;
    deltaAsPercent: boolean;
}

const initialState: HomePageState = {
    loading: false,
    error: undefined,
    predictions: undefined,
    deltaAsPercent: true
}

export const homePage = createSlice({
  name: 'homePage',
  initialState,
  reducers: {
    switchDelta: (state) => {
     
      state.deltaAsPercent = !state.deltaAsPercent
    }
  },
})

// Action creators are generated for each case reducer function
export const { switchDelta } = homePage.actions

export default homePage.reducer