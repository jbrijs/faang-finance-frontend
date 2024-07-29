import React, { FC } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'

export interface PredictionCardProps {
    ticker: string;
    companyName: string;
    prediction: number;
    previous_close: number;
}

const PredictionCard: FC<PredictionCardProps> = (props) => {
    const {ticker, companyName, prediction, previous_close} = props
  return (
    <>
    <Card className="w-1/5 h-60">
        <CardHeader>
          <CardTitle>${ticker}</CardTitle>
          <CardDescription>
            Close Price prediction for {companyName}
          </CardDescription>
          <CardDescription>
            07/28/2024
          </CardDescription>
        </CardHeader>
        <CardContent>
            <div>
                <p className={prediction > previous_close ? "text-3xl text-green-500" : "text-3xl text-red-500"}>${prediction}</p>
                <span></span>
            </div>
        </CardContent>
      </Card>
    </>
  )
}

export default PredictionCard;

