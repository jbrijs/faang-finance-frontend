import { createAsyncThunk } from "@reduxjs/toolkit";
import { homePage } from "./homePageSlice";
import { RootState } from "@/app/store";
import { Service } from "@/services/services";

export const fetchPredictions = createAsyncThunk(
    "home/fetchPredictions",
    async (_, {getState, rejectWithValue}) => {
        const { homePage } = getState() as RootState;

        if (homePage.predictions) {
            return rejectWithValue("Predictions already loaded")
        }
        try {
            const response = await Service.getPredictions();
            return response;
        } catch (error: any) {
            return rejectWithValue(error.message)
        }
    }
)