"use client"

import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartConfig,
} from "@/components/ui/chart"

interface CtgData {
  time: string;
  heartRate?: number;
  uterineContraction?: number;
}

// Generate FHR data
const fhrData: CtgData[] = [];
function getRandomHeartRate() {
  return Math.floor(Math.random() * (160 - 110 + 1)) + 110;
}

for (let i = 0; i <= 60; i += 5) {
  const minutes = Math.floor(i / 60);
  const seconds = i % 60;
  const time = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  const heartRate = getRandomHeartRate();
  fhrData.push({ time, heartRate });
}

// Generate UTC data
const utcData: CtgData[] = [];
function getRandomUterineContraction() {
  return Math.floor(Math.random() * 100); // Example values, adjust as needed
}

for (let i = 0; i <= 60; i += 5) {
  const minutes = Math.floor(i / 60);
  const seconds = i % 60;
  const time = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  const uterineContraction = getRandomUterineContraction();
  utcData.push({ time, uterineContraction });
}

console.log('FHR Data:', fhrData);
console.log('UTC Data:', utcData);

const fhrConfig = {
  heartRate: {
    label: "heart-rate",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig

const utcConfig = {
  uterineContraction: {
    label: "uterine-contraction",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

export function CtgChart() {
  return (
    <Card className="w-full h-full">
      <CardHeader>
        <CardTitle>CTG</CardTitle>
      </CardHeader>

      <CardContent className="pl-0">
        <ChartContainer config={fhrConfig} className="w-full h-72">
          <LineChart
            id="foetal-heart-rate-chart"
            accessibilityLayer
            data={fhrData}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="time"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              padding={{ left: 20, right: 20 }}
            />
            <YAxis
              type="number"
              domain={[80, 200]}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Line
              dataKey="heartRate"
              type="monotone"
              stroke="var(--color-heartRate)"
              strokeWidth={2}
            />
          </LineChart>
        </ChartContainer>

        <ChartContainer config={utcConfig} className="w-full h-72">
          <LineChart
            id="uterine-contraction-chart"
            accessibilityLayer
            data={utcData}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="time"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              padding={{ left: 20, right: 20 }}
            />
            <YAxis
              type="number"
              domain={[0, 100]} 
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Line
              dataKey="uterineContraction"
              type="monotone"
              stroke="var(--color-uterineContraction)"
              strokeWidth={2}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
