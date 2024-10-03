export const testData = [
  {
    ticker: "AAPL",
    companyName: "Apple Inc.",
    prediction: 180.5,
    previous_close: 175.0,
  },
  {
    ticker: "GOOGL",
    companyName: "Alphabet Inc.",
    prediction: 2900.3,
    previous_close: 2950.0,
  },
  {
    ticker: "META",
    companyName: "Meta Platforms Inc.",
    prediction: 350.75,
    previous_close: 360.0,
  },
  {
    ticker: "NFLX",
    companyName: "Netflix Inc.",
    prediction: 625.2,
    previous_close: 610.0,
  },
  {
    ticker: "AMZN",
    companyName: "Amazon.com Inc.",
    prediction: 3700.9,
    previous_close: 3850.0,
  },
  {
    ticker: "NVDA",
    companyName: "NVIDIA Corporation",
    prediction: 820.65,
    previous_close: 800.0,
  },
  {
    ticker: "MSFT",
    companyName: "Microsoft Corporation",
    prediction: 320.45,
    previous_close: 315.0,
  },
  {
    ticker: "ADBE",
    companyName: "Adobe Inc.",
    prediction: 700.3,
    previous_close: 690.0,
  },
];

export const testChartData = [
  { prediction: 3, actual: 4 },
  { prediction: 5, actual: 6 },
  { prediction: 2, actual: 3 },
  { prediction: 7, actual: 5 },
  { prediction: 4, actual: 4 },
  { prediction: 6, actual: 8 },
  { prediction: 8, actual: 9 },
  { prediction: 5, actual: 7 },
  { prediction: 3, actual: 2 },
  { prediction: 4, actual: 5 },
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

export const tickerToCompanyName = (ticker: string): string => {
  switch (ticker) {
    case "AAPL":
      return "Apple Inc.";
    case "GOOGL":
      return "Alphabet Inc.";
    case "META":
      return "Meta Platforms Inc.";
    case "NFLX":
      return "Netflix Inc.";
    case "AMZN":
      return "Amazon.com Inc.";
    case "NVDA":
      return "NVIDIA Corporation";
    case "MSFT":
      return "Microsoft Corporation";
    case "ADBE":
      return "Adobe Inc.";
    default:
      return "Unknown Ticker";
  }
};

export const getPredictionDay = () => {
  const date = new Date();
  switch (date.getDay()) {
    case 5:
      date.setDate(date.getDate() + 3);
      return date;
    case 6:
      date.setDate(date.getDate() + 2);
      return date;
    default:
      date.setDate(date.getDate() + 1);
      return date;
  }
};
