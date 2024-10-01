
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