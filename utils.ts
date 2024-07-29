export interface PredictionCardProps {
    ticker: string;
    companyName: string;
    prediction: number;
    previous_close: number;
}

const testData: PredictionCardProps[] = [
    {
        ticker: "AAPL",
        companyName: "Apple Inc.",
        prediction: 180.50,
        previous_close: 175.00,
    },
    {
        ticker: "GOOGL",
        companyName: "Alphabet Inc.",
        prediction: 2900.30,
        previous_close: 2850.00,
    },
    {
        ticker: "META",
        companyName: "Meta Platforms, Inc.",
        prediction: 350.75,
        previous_close: 340.00,
    },
    {
        ticker: "NFLX",
        companyName: "Netflix, Inc.",
        prediction: 625.20,
        previous_close: 610.00,
    },
    {
        ticker: "AMZN",
        companyName: "Amazon.com, Inc.",
        prediction: 3700.90,
        previous_close: 3650.00,
    },
    {
        ticker: "NVDA",
        companyName: "NVIDIA Corporation",
        prediction: 820.65,
        previous_close: 800.00,
    },
    {
        ticker: "MSFT",
        companyName: "Microsoft Corporation",
        prediction: 320.45,
        previous_close: 315.00,
    },
];
