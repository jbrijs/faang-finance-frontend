import React, { FC } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'

export interface PredictionCardProps {
    ticker: string;
    companyName: string;
    date: string;
    prediction: string;
}

const PredictionCard: FC<PredictionCardProps> = (props) => {
    const {ticker, companyName, date, prediction} = props
  return (
    <>
    <Card className="w-1/5">
        <CardHeader>
          <CardTitle>${ticker}</CardTitle>
          <CardDescription>
            Close Price prediction for {companyName}
          </CardDescription>
          <CardDescription>
            {date}
          </CardDescription>
        </CardHeader>
        <CardContent>
            <p className="text-3xl text-green-500">${prediction}</p>
        </CardContent>
      </Card>
    </>
  )
}

export default PredictionCard;

