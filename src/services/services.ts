import axios from "axios";

export class Service {
    
  static async getPredictionData(ticker: string) {
    try {
      const response = await axios.get(
        `https://sjzd3k5cji.execute-api.us-west-1.amazonaws.com/prod/data/${ticker}`
      );
      return response.data;
    } catch (error: any) {
      console.error("Error fetching prediction data:", error);
      return error.response ? error.response.data : error.message;
    }
  }

  static async getPredictions() {
    try {
      const response = await axios.get(
        "https://sjzd3k5cji.execute-api.us-west-1.amazonaws.com/prod/predictions"
      );
      return response.data;
    } catch (error: any) {
      console.error("Error fetching predictions:", error);
      return error.response ? error.response.data : error.message;
    }
  }
}
