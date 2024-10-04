import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart.tsx";
import { formatMoney } from "@/utils";
import { PredictionDataResponse } from "@/services/model";
import { Skeleton } from "@/components/ui/skeleton";

interface Props {
  ticker: string;
  company: string;
  data: PredictionDataResponse[] | null;
  loading: boolean;
  error: string | null;
}

const DataChart: React.FC<Props> = ({ ticker, company, data, loading, error }) => {
  const chartConfig = {
    prediction: {
      label: "Predicted Close Price",
      color: "hsl(var(--chart-1))",
    },
    actual: {
      label: "Actual Close Price",
      color: "hsl(var(--chart-2))",
    },
  } satisfies ChartConfig;

  return (
    <Card className="h-3/4 w-3/4">
      <CardHeader>
        <CardTitle>{ticker} - Prediction vs Actual</CardTitle>
        <CardDescription className="leading-none">
          Close price predictions compared to actual close price for {company}
        </CardDescription>
        <CardDescription>
         {data && <div className="leading-none">
          Predictions from {data[0].timeStamp} to {data[data.length - 1].timeStamp}
         </div>
          }
        </CardDescription>
      </CardHeader>
      <CardContent className="h-3/4">
       {data && <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={data}
            margin={{
              left: 12,
              right: 20,
              bottom: 20,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="timeStamp"
              tickLine={false}
              axisLine={true}
              tickMargin={24}
              angle={-60}
              tickFormatter={(value) => value.slice(5)}
            />
            <YAxis
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => formatMoney(value)}
            />
            <ChartTooltip cursor={true} content={<ChartTooltipContent />} />
            <Line
              dataKey="prediction"
              type="monotone"
              stroke="var(--color-prediction)"
              strokeWidth={6}
              dot={true}
            />
            <Line
              dataKey="actual"
              type="monotone"
              stroke="var(--color-actual)"
              strokeWidth={6}
              dot={true}
            />
          </LineChart>
        </ChartContainer>}
        {loading && <Skeleton className="w-full h-48 md:h-72 lg:h-[500px] rounded"/>}
        {error && <p>Error loading data: {error}</p>}
      </CardContent>
    </Card>
  );
};

export default DataChart;
