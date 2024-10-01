export interface PredictionDataResponse {
  timeStamp: string;
  prediction: number;
  actual: number;
}

export interface PredictionsResponse {
  ticker: string;
  prediction: number;
  prevClose: number;

}
