"use client"

import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { useEffect, useMemo, useState } from "react"
import { addMinutes } from "@/lib/utils"

interface ChartDataPoint {
  time: string,
  actual: number,
  predicted: number
}

// Helper functions to generate gradually increasing values
function getGradualValue(prevValue: number) {
  const increment = Math.random() * 5 + 2; // Increase by a random value between 2 and 7
  return prevValue + increment;
}

const chartConfig = {
  actual: {
    label: "Actual",
    color: "hsl(var(--chart-1))",
  },
  predicted: {
    label: "Predicted",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

export function LabourProgressChart() {
  const [chartData, setChartData] = useState<ChartDataPoint[]>([
    { time: "00:00", actual: 10, predicted: 15 },
    { time: "00:10", actual: 13, predicted: 17 },
    { time: "00:20", actual: 23, predicted: 30 },
    { time: "00:30", actual: 35, predicted: 38 },
    { time: "00:40", actual: 45, predicted: 40 },
    { time: "00:50", actual: 50, predicted: 55 },
    { time: "01:00", actual: 55, predicted: 58 },
  ])

  useEffect(() => {
    const interval = setInterval(() => {
      setChartData((prevData) => {
        const lastEntry = prevData[prevData.length - 1];
        const newTime = addMinutes(lastEntry.time, 10);

        const newActual = getGradualValue(lastEntry.actual);
        const newPredicted = getGradualValue(lastEntry.predicted);

        const newDataPoint = {
          time: newTime,
          actual: newActual,
          predicted: newPredicted,
        };

        return [...prevData.slice(-6), newDataPoint];
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const renderLastUpdatedAt = useMemo(() => {
    if (chartData.length == 0) {
      return "";
    }
    const lastEntry = chartData[chartData.length - 1];
    return lastEntry.time;
  }, [chartData]);
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>Labour Progression Analytics</CardTitle>
        <CardDescription>Actual vs. Predicted Labour Progression</CardDescription>
        <CardDescription className='text-xs'>Last updated at {renderLastUpdatedAt} (updated every 10 minutes)</CardDescription>
      </CardHeader>

      <CardContent className="pl-0">
        <ChartContainer config={chartConfig} className="w-full h-full">
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              // left: 12,
              // right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="time"
              tickLine={true}
              axisLine={true}
              tickMargin={8}
              padding={{ left: 20, right: 20 }}
            />
            <YAxis
              domain={[0, 100]}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Line
              dataKey="actual"
              type="monotone"
              stroke="var(--color-actual)"
              strokeWidth={2}
              dot={true}
            />
            <Line
              dataKey="predicted"
              type="monotone"
              stroke="var(--color-predicted)"
              strokeWidth={2}
              dot={true}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
