import React, { FC, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

import DeltaButton from "./delta-button";

export interface PredictionCardProps {
  ticker: string;
  companyName: string;
  prediction: number;
  previous_close: number;
  percentView: boolean;
}

interface PredictionCardState {
  percent_view: boolean;
}

const PredictionCard: FC<PredictionCardProps> = ( { ticker, companyName, prediction, previous_close, percentView }) => {
 
  const isUp = prediction > previous_close;

  return (
  
      <Card className="sm:col-span-1 sm:row-span-2 w-full">
        <CardHeader className="w-full">
          <CardTitle className="w-full flex flex-row justify-between items-center justify-between">{ticker} <div className="flex flex-dol mb-2" >
            <DeltaButton trendingUp={isUp} percentView={percentView} prediction={prediction} prevClose={previous_close}/>
          </div></CardTitle>
          
          <CardDescription>
            Close Price prediction for {companyName}
          </CardDescription>
          <CardDescription>07/28/2024</CardDescription>
        </CardHeader>
        <CardContent>
            <p
              className={
                isUp ? "text-3xl text-green-500" : "text-3xl text-red-500"
              }
            >
              ${prediction}
            </p>
        </CardContent>
      </Card>
    
  );
};

export default PredictionCard;
