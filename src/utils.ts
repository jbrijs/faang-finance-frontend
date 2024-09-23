import { PredictionCardProps } from "./components/prediction-card";

export const testData: PredictionCardProps[] = [
  {
    ticker: "AAPL",
    companyName: "Apple Inc.",
    prediction: 180.5,
    previous_close: 175.0,
    percentView: false
  },
  {
    ticker: "GOOGL",
    companyName: "Alphabet Inc.",
    prediction: 2900.3,
    previous_close: 2950.0,
    percentView: false
  },
  {
    ticker: "META",
    companyName: "Meta Platforms Inc.",
    prediction: 350.75,
    previous_close: 360.0,
    percentView: false
  },
  {
    ticker: "NFLX",
    companyName: "Netflix Inc.",
    prediction: 625.2,
    previous_close: 610.0,
    percentView: false
  },
  {
    ticker: "AMZN",
    companyName: "Amazon.com Inc.",
    prediction: 3700.9,
    previous_close: 3850.0,
    percentView: false
  },
  {
    ticker: "NVDA",
    companyName: "NVIDIA Corporation",
    prediction: 820.65,
    previous_close: 800.0,
    percentView: false
  },
  {
    ticker: "MSFT",
    companyName: "Microsoft Corporation",
    prediction: 320.45,
    previous_close: 315.0,
    percentView: false
  },
  {
    ticker: "ADBE",
    companyName: "Adobe Inc.",
    prediction: 700.3,
    previous_close: 690.0,
    percentView: false
  },
];

export const formatMoney = (value: number): string => {
  return value.toLocaleString("en-US", { style: "currency", currency: "USD" });
};

export const formatPercentage = (value: number): string => {
  return value.toLocaleString("en-US", {
    style: "percent",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};
