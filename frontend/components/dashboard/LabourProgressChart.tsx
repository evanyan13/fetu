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

const chartData = [
  { time: "00:00", actual: 10, predicted: 15 },
  { time: "00:30", actual: 25, predicted: 20 },
  { time: "01:00", actual: 30, predicted: 30 },
  { time: "01:30", actual: 35, predicted: 42 },
  { time: "02:00", actual: 45, predicted: 43 },
  { time: "02:30", actual: 50, predicted: 60 },
  { time: "03:00", actual: 70, predicted: 80 },
]

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
  return (
    <Card>
      <CardHeader>
        <CardTitle>Labour Progression Analytics</CardTitle>
        <CardDescription>Actual vs. Predicted Labour Progression</CardDescription>
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
