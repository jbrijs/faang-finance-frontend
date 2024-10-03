import { useEffect, useState } from "react";
import PredictionCard from "../../components/prediction-card";
import { testData, tickerToCompanyName } from "../../utils";
import { Switch } from "../../components/ui/switch";
import { Label } from "../../components/ui/label";
import { Service } from "@/services/services";
import { PredictionsResponse } from "@/services/model";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";
import { switchDelta } from "./homePageSlice";
import { useAppDispatch } from "@/app/hooks";
import { fetchPredictions } from "./thunks";
import { Divide } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import SkeletonCard from "./SkeletonCard";

export function HomePage() {
  const dispatch = useAppDispatch();

  const { predictions, loading, error, deltaAsDollar } = useSelector(
    (state: RootState) => state.homePage
  );

  useEffect(() => {
    if (!predictions) {
      dispatch(fetchPredictions());
    }
  }, [dispatch]);

  useEffect(() => {
    console.log(loading);
  }, []);

  const loadingContent = [...Array(8)].map((_, i) => (
    <Skeleton
      key={i}
      className="sm:col-span-1 sm:row-span-2 w-full h-44 border-slate-400"
    ></Skeleton>
  ));

  return (
    <>
      <div className="m-8">
        <h1 className="text-4xl">Todays Predictions</h1>
        <div className="flex flex-col items-start gap-4 pt-10">
          <div className="flex flex-row items-center space-x-2 w-full">
            <Switch
              id="delta-view"
              checked={deltaAsDollar}
              onCheckedChange={() => dispatch(switchDelta())}
            />
            {deltaAsDollar && (
              <Label htmlFor="delta-view">Show delta as %</Label>
            )}
            {!deltaAsDollar && (
              <Label htmlFor="delta-view">Show delta as $</Label>
            )}
          </div>
          <div className="md:grid grid-cols-4 grid-rows-2 w-full md:gap-4 gap-2 flex flex-col">
            {predictions &&
              predictions.map((data, index) => (
                <PredictionCard
                  percentView={deltaAsDollar}
                  key={index}
                  ticker={data.ticker}
                  companyName={tickerToCompanyName(data.ticker)}
                  prediction={data.prediction}
                  previous_close={data.prevClose}
                />
              ))}
            {loading &&
              [...Array(8)].map((_, index) => <SkeletonCard key={index} />)}
            {error && <p>{error}</p>}
          </div>
        </div>
      </div>
    </>
  );
}
export default HomePage;
