import { useState } from "react";
import architectureImage from "../assets/architecture.png";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";
import { ChevronDown, ChevronUp } from "lucide-react";

const ProjectDescriptionPage = () => {
  const [featuresOpen, setFeaturesOpen] = useState(true);
  const [dataFetchingOpen, setDataFetchingOpen] = useState(true);
  const [modelTrainingOpen, setModelTrainingOpen] = useState(true);

  return (
    <div className="flex flex-col items-center justify-center w-full overflow-y-auto">
      <h1 className="text-4xl font-semibold py-10 text-center w-full">
        Project Description
      </h1>
      <div className="p-10 flex flex-col items-center justify-center w-fit">
        <div className="w-full flex flex-row justify-start pb-2">
          <h2 className="text-3xl text-muted-foreground font-medium text-left">
            Project Goals
          </h2>
        </div>
        <p className="max-w-prose text-lg  pb-8">
          The goal of this project was to train multiple Artificial Neural
          Networks (ANNs) to predict the closing stock prices of various
          companies. These predictions are hosted on the cloud, allowing others
          to access and view them. This project is purely experimental and
          should not be considered financial advice.
        </p>
        <div className="w-full flex flex-row justify-start pb-2">
          <h2 className="text-3xl text-muted-foreground font-medium text-left">
            Idea Iteration
          </h2>
        </div>
        <p className="max-w-prose text-lg ">
          The initial plan for the project was to use Flask, a lightweight
          Python web framework, to load the models and generate predictions. The
          Flask app would run on an AWS EC2 instance, with the models and data
          stored in AWS S3. However, using a persistent server quickly proved
          inefficient for two main reasons: first, obtaining an instance with
          sufficient compute power for model inference was costly; second,
          predictions only needed to be made once per day, so storing them was
          more efficient than generating a new prediction every time a user
          visited the webpage. Instead, I switched to using an AWS Lambda
          function, which is triggered after market close to make predictions
          for the following trading day. The entire architecture is shown in
          Figure 1 below.
        </p>
      </div>
      <div className="md:w-5/6 lg:w-1/2 md:p-10 w-full p-4">
        <img src={architectureImage} alt="AWS cloud architecture picture" />
        <span className="flex flex-row gap-1.5 text-muted-foreground">
          <p>Figure 1:</p>
          <p className="italic">FAANG Finance AWS Cloud Architecture</p>
        </span>
      </div>
      <div className="p-10 flex flex-col items-center justify-center w-fit">
        <div className="w-full flex flex-row justify-start pb-0">
          <h2 className="text-3xl text-muted-foreground font-medium text-left">
            Training Methods
          </h2>
        </div>
        <p className="max-w-prose text-background p-0 pl-2">
          --------------------------------------------------------------------------------------------------------------------------------------------------------------------------
        </p>
        <Collapsible
          className="flex flex-col items-start justify-center text-left w-full"
          onClick={() => setDataFetchingOpen(!dataFetchingOpen)}
          open={dataFetchingOpen}
        >
          <CollapsibleTrigger className="w-full flex flex-row justify-start p-2 hover:bg-muted rounded">
            <h3 className="text-xl text-left text-muted-foreground font-bold flex flex-row items-center gap-1.5">
              Data Fetching {dataFetchingOpen ? <ChevronUp /> : <ChevronDown />}
            </h3>
          </CollapsibleTrigger>
          <CollapsibleContent className="pl-2">
            <p className="max-w-prose text-lg  pb-8">
              I used the Alpha Vantage API to collect stock price data. The API
              call returned key data points including time_stamp, open, close,
              and volume for the entire trading history of each company. Using
              this data, I engineered additional features to enhance the model's
              training process.
            </p>
          </CollapsibleContent>
        </Collapsible>
        <Collapsible
          className="flex flex-col items-start justify-center text-left w-full"
          onClick={() => setFeaturesOpen(!featuresOpen)}
          open={featuresOpen}
        >
          <CollapsibleTrigger className="w-full flex flex-row justify-start p-2 hover:bg-muted rounded">
            <h3 className="text-xl text-left text-muted-foreground font-bold flex flex-row items-center gap-1.5">
              Feature Engineering{" "}
              {featuresOpen ? <ChevronUp /> : <ChevronDown />}
            </h3>
          </CollapsibleTrigger>
          <CollapsibleContent className="pl-2">
            <p className="max-w-prose text-lg  pb-8">
              I calculated many technical indicators to provide my features for
              training models. These technical indicators include:
            </p>
            <ul className="flex flex-col gap-2 max-w-prose ">
              <li>
                <strong>SMA (Simple Moving Average):</strong> The average of a
                stock's price over a specific period, giving equal weight to all
                data points.
              </li>
              <li>
                <strong>EMA (Exponential Moving Average):</strong> A weighted
                average of a stock's price over a specific period, giving more
                importance to recent prices.
              </li>
              <li>
                <strong>RSI (Relative Strength Index):</strong> A momentum
                oscillator that measures the speed and change of price
                movements, indicating overbought or oversold conditions.
              </li>
              <li>
                <strong>MACD (Moving Average Convergence Divergence):</strong> A
                trend-following indicator that shows the relationship between
                two moving averages of a stock's price.
              </li>
              <li>
                <strong>Signal Line:</strong> A smoothed version of the MACD
                line, often used as a trigger for buy or sell signals.
              </li>
              <li>
                <strong>Upper Band (Bollinger Band):</strong> The upper boundary
                of a volatility-based indicator, set a certain number of
                standard deviations above the moving average.
              </li>
              <li>
                <strong>Lower Band (Bollinger Band):</strong> The lower boundary
                of a volatility-based indicator, set a certain number of
                standard deviations below the moving average.
              </li>
              <li>
                <strong>Log Returns:</strong> The logarithmic difference between
                consecutive stock prices, used to normalize returns for
                statistical analysis.
              </li>
              <li>
                <strong>Rolling Volatility:</strong> A measure of a stock's
                price variability over a specific rolling window, often used to
                assess risk.
              </li>
              <li>
                <strong>Momentum:</strong> A measure of the speed of a stock's
                price movement over a set period, indicating the strength of a
                trend.
              </li>
            </ul>
          </CollapsibleContent>
        </Collapsible>
        <Collapsible
          className="flex flex-col items-start justify-center text-left w-full"
          onClick={() => setModelTrainingOpen(!modelTrainingOpen)}
          open={modelTrainingOpen}
        >
          <CollapsibleTrigger className="w-full flex flex-row justify-start p-2 hover:bg-muted rounded">
            <h3 className="text-xl text-left text-muted-foreground font-bold flex flex-row items-center gap-1.5">
              Model Training{" "}
              {modelTrainingOpen ? <ChevronUp /> : <ChevronDown />}
            </h3>
          </CollapsibleTrigger>
          <CollapsibleContent className="pl-2">
            <p className="max-w-prose text-lg  pb-8">
              I used PyTorch to train the LSTM models, loading a configuration
              file that contained a list of hyperparameters I tuned to enhance
              model performance. The hyperparameters included batch size, number
              of epochs, learning rate, hidden dimensions, and the number of
              layers. I implemented an early stopping strategy to halt training
              when performance stagnated, adjusting the patience and minimum
              delta variables accordingly. While I applied the same architecture
              across all companies, this decision may not have optimized
              performance; in the future, I plan to develop architecture
              tailored to each company’s dataset.
            </p>
            <p className="max-w-prose text-lg ">
              For model training, I employed a moving window technique, where
              the model was trained on the most recently gathered data. This
              approach helps prevent the models from overfitting to outdated
              data, which often reflects significantly lower stock prices.
              Additionally, I utilized cross-validation on the training window
              to assess the model's performance across various segments of the
              data.
            </p>
          </CollapsibleContent>
        </Collapsible>
      </div>
    </div>
  );
};

export default ProjectDescriptionPage;
