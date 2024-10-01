import { useState } from "react";
import PredictionCard from "./prediction-card";
import { testData } from "../utils";
import { Switch } from "./ui/switch";
import { Label } from "./ui/label";

export function HomePage() {
  const [deltaAsPercent, setDeltaAsPercent] = useState(false);
  return (
    <>
      <div className="m-8">
        <h1 className="text-4xl">Todays Predictions</h1>
        <div className="flex flex-col items-start gap-4 pt-10">
          <div className="flex flex-row items-center space-x-2 w-full">
            <Switch
              id="delta-view"
              checked={deltaAsPercent}
              onCheckedChange={(value) => {
                console.log(value);
                setDeltaAsPercent(value);
              }}
            />
            {deltaAsPercent && (
              <Label htmlFor="delta-view">Show delta as %</Label>
            )}
            {!deltaAsPercent && (
              <Label htmlFor="delta-view">Show delta as $</Label>
            )}
          </div>
          <div className="md:grid grid-cols-4 grid-rows-2 w-full gap-2 flex flex-col">
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
      </div>
    </>
  );
}
export default HomePage;
