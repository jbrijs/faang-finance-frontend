import React from "react";
import PredictionCard from "./prediction-card";
import { testData } from "../utils";

export function HomePage() {
  return (
    <>
      <div className="flex flex-row flex-wrap items-center justify-center gap-4 pt-10">
        {testData.map((data, index) => (
          <PredictionCard
            key={index}
            ticker={data.ticker}
            companyName={data.companyName}
            prediction={data.prediction}
            previous_close={data.previous_close}
          />
        ))}
      </div>
    </>
  );
}
export default HomePage;
