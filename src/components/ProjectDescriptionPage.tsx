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

  return (
    <div className="flex flex-col items-center justify-center w-full overflow-y-auto">
      <h1 className="text-4xl font-semibold py-10">Project Description</h1>
      <div className="p-10 flex flex-col items-center justify-center w-fit">
        <div className="w-full flex flex-row justify-start pb-2">
          <h2 className="text-3xl text-muted-foreground font-medium">
            Project Goals
          </h2>
        </div>
        <p className="max-w-prose text-lg pb-8">
          The goal of this project was to train a number of Artificial Neural
          Networks that could predict the closing stock price of companies and
          host these ANNs on the cloud so that others could view the
          predictions. This is meant as an experiment, and IS NOT FINANCIAL
          ADVICE.
        </p>
        <div className="w-full flex flex-row justify-start pb-2">
          <h2 className="text-3xl text-muted-foreground font-medium">
            Idea Iteration
          </h2>
        </div>
        <p className="max-w-prose text-lg">
          The original vision of the project was to use Flask, a lightweight web
          framework in Python, to load the models and make predictions. The
          Flask app would be running on an AWS EC2 instance and the models and
          data would be stored in AWS S3. Having a persistant server soon proved
          to be the wrong tool for the job for a few reasons. First, getting an
          instance with enough compute for model inference proved to be costly,
          and second, predictions would only need to be made once a day and
          could be stored instead of a prediction being made everytime a user
          landed on the web page. Instead, I used an AWS Lambda Function that
          would be called after market close to make predictions for the next
          trading day. The whole architecture can be seen in Figure 1 below.
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
        <div className="w-full flex flex-row justify-start pb-2">
          <h2 className="text-3xl text-muted-foreground font-medium">
            Methods Used
          </h2>
        </div>
        <Collapsible
          className="flex flex-col items-start justify-start text-left w-full"
          onClick={() => setDataFetchingOpen(!dataFetchingOpen)}
          open={dataFetchingOpen}
        >
          <CollapsibleTrigger className="w-full flex flex-row justify-start p-2 hover:bg-muted rounded">
            <h3 className="text-xl text-left text-muted-foreground font-bold flex flex-row items-center gap-1.5">
              Data Fetching {dataFetchingOpen && <ChevronUp />}
              {!dataFetchingOpen && <ChevronDown />}
            </h3>
          </CollapsibleTrigger>
          <CollapsibleContent className="pl-2">
            <p className="max-w-prose text-lg pb-8">
              I used the Alpha Vantage API to gather stock price data. The API
              call I used returned <code>time_stamp</code>, <code>open</code>,{" "}
              <code>close</code>, and <code>volume</code> datapoints for as long
              as the company has been publicly traded. With this data, I was
              able to engineer many other features that would aid in model
              training.
            </p>
          </CollapsibleContent>
        </Collapsible>
        <Collapsible
          className="flex flex-col items-start justify-start text-left w-full"
          onClick={() => setFeaturesOpen(!featuresOpen)}
          open={featuresOpen}
        >
          <CollapsibleTrigger className="w-full flex flex-row justify-start p-2 hover:bg-muted rounded">
            <h3 className="text-xl text-left text-muted-foreground font-bold flex flex-row items-center gap-1.5">
              Feature Engineering
              {featuresOpen && <ChevronUp />}
              {!featuresOpen && <ChevronDown />}
            </h3>
          </CollapsibleTrigger>
          <CollapsibleContent className="pl-2">
            <p className="max-w-prose text-lg pb-8">
              I calculated many techincal indicators to provide my features for
              training models. These techincal indicators include:
            </p>
            <ul className="flex flex-col gap-2">
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
        <div className="w-full flex flex-row justify-start pb-2">
          <h2 className="text-3xl text-muted-foreground font-medium">
            Idea Iteration
          </h2>
        </div>
        <p className="max-w-prose text-lg">
          The original vision of the project was to use Flask, a lightweight web
          framework in Python, to load the models and make predictions. The
          Flask app would be running on an AWS EC2 instance and the models and
          data would be stored in AWS S3. Having a persistant server soon proved
          to be the wrong tool for the job for a few reasons. First, getting an
          instance with enough compute for model inference proved to be costly,
          and second, predictions would only need to be made once a day and
          could be stored instead of a prediction being made everytime a user
          landed on the web page. Instead, I used an AWS Lambda Function that
          would be called after market close to make predictions for the next
          trading day. The whole architecture can be seen in Figure 1 below.
        </p>
      </div>
    </div>
  );
};

export default ProjectDescriptionPage;
