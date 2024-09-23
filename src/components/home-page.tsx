import React, { useState } from "react";
import PredictionCard from "./prediction-card";
import { testData } from "../utils";
import { ToggleGroup, ToggleGroupItem } from "./ui/toggle-group";

export function HomePage() {
  const [deltaAsPercent, setDeltaAsPercent] = useState(true);
  return (
    <>
      <div className="m-8">
        <h1 className="text-4xl">Todays Predictions</h1>
      
        <div className="flex flex-row flex-wrap items-center justify-center gap-4 pt-10">
          {testData.map((data, index) => (
            <PredictionCard
              percentView={deltaAsPercent}
              key={index}
              ticker={data.ticker}
              companyName={data.companyName}
              prediction={data.prediction}
              previous_close={data.previous_close}
            />
          ))}
        </div>
      </div>
    </>
  );
}
export default HomePage;
