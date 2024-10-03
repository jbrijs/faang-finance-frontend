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

interface Props {
  ticker: string;
  company: string;
  data: PredictionDataResponse[];
}

const DataChart: React.FC<Props> = ({ ticker, company, data }) => {
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
        <CardDescription>
          Close price predictions compared to actual close price for {company}
        </CardDescription>
        <CardDescription>
         {} to{" "}
          {}
        </CardDescription>
      </CardHeader>
      <CardContent className="h-3/4">
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
      </CardContent>
    </Card>
  );
};

export default DataChart;
