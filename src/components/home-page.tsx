import { useEffect, useState } from "react";
import PredictionCard from "./prediction-card";
import { testData, tickerToCompanyName } from "../utils";
import { Switch } from "./ui/switch";
import { Label } from "./ui/label";
import { Service } from "@/services/services";
import { PredictionsResponse } from "@/services/model";

export function HomePage() {
  const [deltaAsPercent, setDeltaAsPercent] = useState(false);
  const [predictions, setPredictions] = useState<PredictionsResponse[] | undefined>(undefined)

  useEffect(() => {
    const getPredictions = async () => {
      const response = await Service.getPredictions();
      if (response) {
        setPredictions(response)
      }
    };
    getPredictions()
  }, [])

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
            {predictions && predictions.map((data, index) => (
              <PredictionCard
                percentView={deltaAsPercent}
                key={index}
                ticker={data.ticker}
                companyName={tickerToCompanyName(data.ticker)}
                prediction={data.prediction}
                previous_close={data.prevClose}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
export default HomePage;
