import { FC } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

import DeltaButton from "./delta-button";
import { formatMoney, getPredictionDay } from "@/utils";

export interface PredictionCardProps {
  ticker: string;
  companyName: string;
  prediction: number;
  previous_close: number;
  percentView: boolean;
}

const PredictionCard: FC<PredictionCardProps> = ({
  ticker,
  companyName,
  prediction,
  previous_close,
  percentView,
}) => {

  const isUp = prediction > previous_close;

  return (
    <Card className="sm:col-span-1 sm:row-span-2 w-full">
      <CardHeader className="w-full">
        <CardTitle className="w-full flex flex-row items-center justify-between">
          {ticker}{" "}
          <div className="flex flex-dol mb-2">
            <DeltaButton
              trendingUp={isUp}
              percentView={percentView}
              prediction={prediction}
              prevClose={previous_close}
            />
          </div>
        </CardTitle>

        <CardDescription>
          Predicted close price for {companyName} on{" "}
          {getPredictionDay().toDateString()}.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col h-36 w-full justify-end">
        <p
          className={isUp ? "text-4xl text-green-500" : "text-4xl text-red-500"}
        >
          {formatMoney(prediction)}
        </p>
      </CardContent>
    </Card>
  );
};

export default PredictionCard;
