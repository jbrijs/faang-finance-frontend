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
import { formatMoney, testChartData } from "@/utils";

interface Props {
  ticker: string;
  company: string;
}

const DataChart: React.FC<Props> = ({ ticker, company }) => {
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
        <CardTitle>{ticker} Model Prediction vs Actual</CardTitle>
        <CardDescription>
          Close price predictions compared to actual close price for {company}{" "}
          from {testChartData[0].timeStamp} -{" "}
          {testChartData[testChartData.length - 1].timeStamp}
        </CardDescription>
      </CardHeader>
      <CardContent className="h-3/4">
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={testChartData}
            margin={{
              left: 12,
              right: 20,
              bottom: 20
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
            tickFormatter={(value) => formatMoney(value)}/>
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
