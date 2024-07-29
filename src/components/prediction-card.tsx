import React, { FC, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { space } from "postcss/lib/list";

export interface PredictionCardProps {
  ticker: string;
  companyName: string;
  prediction: number;
  previous_close: number;
}

interface PredictionCardState {
  percent_view: boolean;
}

const PredictionCard: FC<PredictionCardProps> = (props) => {
  const { ticker, companyName, prediction, previous_close } = props;
  const isUp = prediction > previous_close;
  const [state, setState] = useState<PredictionCardState>({
    percent_view: true,
  });

  const handleDeltaClick = () => {
    setState((prev) => ({ percent_view: !prev.percent_view }));
  };

  const delta = Math.abs(prediction - previous_close)
  const deltaPercent = (delta / previous_close) * 100

  return (
    <>
      <Card className="w-1/5 h-60 relative">
        <CardHeader>
          <div className="flex flex-dol mb-2" >
            <CardTitle>${ticker} </CardTitle>
            {isUp ? (
              <div className="flex flex-row gap-1 cursor-pointer" onClick={handleDeltaClick}>
                <ArrowUpwardIcon className="ml-4 text-green-500" />
                {state.percent_view ? (
                  <p className="text-md text-green-500">
                    {deltaPercent.toFixed(2)}%
                  </p>
                ) : (
                  <p className="text-md text-green-500">
                    ${delta.toFixed(2)}
                  </p>
                )}
              </div>
            ) : (
              <div className="flex flex-row gap-1 cursor-pointer" onClick={handleDeltaClick}>
                <ArrowDownwardIcon className="ml-4 text-red-500" />
                {state.percent_view ? (
                  <p className="text-md text-red-500">
                    {deltaPercent.toFixed(2)}%
                  </p>
                ) : (
                  <p className="text-md text-red-500">
                    ${delta.toFixed(2)}
                  </p>
                )}
              </div>
            )}
          </div>
          <CardDescription>
            Close Price prediction for {companyName}
          </CardDescription>
          <CardDescription>07/28/2024</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-end absolute bottom-8">
            <p
              className={
                isUp ? "text-3xl text-green-500" : "text-3xl text-red-500"
              }
            >
              ${prediction}
            </p>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default PredictionCard;
