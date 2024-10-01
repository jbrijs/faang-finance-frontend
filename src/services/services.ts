import axios from "axios";
import { PredictionDataResponse, PredictionsResponse } from "./model";

export class Service {
  static async getPredictionData(
    ticker: string
  ): Promise<PredictionDataResponse[] | null> {
    try {
      const response = await axios.get(
        `https://sjzd3k5cji.execute-api.us-west-1.amazonaws.com/prod/data/${ticker}`
      );
      return response.data;
    } catch (error: any) {
      console.error("Error fetching prediction data:", error);
      return null;
    }
  }

  static async getPredictions(): Promise<PredictionsResponse[] | null> {
    try {
      const response = await axios.get(
        "https://sjzd3k5cji.execute-api.us-west-1.amazonaws.com/prod/predictions"
      );
      return response.data;
    } catch (error: any) {
      console.error("Error fetching predictions:", error);
      return null
    }
  }
}
