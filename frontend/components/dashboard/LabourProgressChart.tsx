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
  { time: "00:00", actual: 35, predicted: 50 },
  { time: "00:30", actual: 42, predicted: 58 },
  { time: "01:00", actual: 62, predicted: 61 },
  { time: "01:30", actual: 82, predicted: 70 },
  { time: "02:00", actual: 83, predicted: 92 },
  { time: "02:30", actual: 96, predicted: 120 },
  { time: "03:00", actual: 106, predicted: 140 },
]

const chartConfig = {
  desktop: {
    label: "Actual",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
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
        <ChartContainer config={chartConfig} className="w-full h-64">
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              // left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="time"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            // tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Line
              dataKey="actual"
              type="monotone"
              stroke="var(--color-desktop)"
              strokeWidth={2}
              dot={true}
            />
            <Line
              dataKey="predicted"
              type="monotone"
              stroke="var(--color-mobile)"
              strokeWidth={2}
              dot={true}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
