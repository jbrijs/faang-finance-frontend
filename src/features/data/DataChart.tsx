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

const DataChart: React.FC<Props> = ({
  ticker,
  company,
  data,
  loading,
  error,
}) => {
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
    <div>
      <Card className="md:h-3/4 md:w-full h-full w-full md:p-0">
        <CardHeader className="p-2 pb-4 md:p-6">
          <CardTitle>{ticker} - Prediction vs Actual</CardTitle>
          <div className="hidden md:block">
            <CardDescription className="leading-none">
              Close price predictions compared to actual close price for{" "}
              {company}
            </CardDescription>
            <CardDescription>
              {data && (
                <div className="leading-none">
                  Predictions from {data[0].timeStamp} to{" "}
                  {data[data.length - 1].timeStamp}
                </div>
              )}
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className=" p-2 md:p-6">
          {data && (
            <ChartContainer config={chartConfig}>
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
            </ChartContainer>
          )}
          {loading && (
            <Skeleton className="w-full h-48 md:h-72 lg:h-[500px] rounded" />
          )}
          {error && <p>Error loading data: {error}</p>}
        </CardContent>
      </Card>
      <div className="flex flex-col gap-1.5 md:hidden pt-6">
        <CardDescription className="">
          Close price predictions compared to actual close price for {company}
        </CardDescription>
        <CardDescription>
          {data && (
            <div className="">
              Predictions from {data[0].timeStamp} to{" "}
              {data[data.length - 1].timeStamp}
            </div>
          )}
        </CardDescription>
      </div>
    </div>
  );
};

export default DataChart;
