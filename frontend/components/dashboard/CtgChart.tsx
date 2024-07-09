"use client"

import { CartesianGrid, Legend, Line, LineChart, XAxis, YAxis } from "recharts"

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
  cervicalDilation?: number;
}

// Helper functions to generate random values
function getRandomHeartRate() {
  return Math.floor(Math.random() * (160 - 110 + 1)) + 110;
}

function getRandomUterineContraction(time: number) {
  const base = Math.random() * 40;
  const multiplier = time > 30 ? 1 : 0.5;
  const offset = 20;
  return base * multiplier + offset;
}

function generateRandomCervicalDilation(previousValue: number) {
  const increment = Math.random() * 0.2;
  return Math.min(previousValue + increment, 6);
}

// Generate synthetic CTG data for demo purposes
const ctgData: CtgData[] = [];
let previousCervicalDilation = 2;

for (let i = 0; i <= 60; i += 5) {
  const hours = Math.floor(i / 60);
  const minutes = i % 60;
  const time = `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`;

  previousCervicalDilation = generateRandomCervicalDilation(previousCervicalDilation);

  ctgData.push({
    time,
    heartRate: getRandomHeartRate(),
    uterineContraction: getRandomUterineContraction(i),
    cervicalDilation: previousCervicalDilation,
  });
}

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

const cdConfig = {
  cervicalDilation: {
    label: "cervical-dilation",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig

export function CtgChart() {
  return (
    <Card className="w-full h-full">
      <CardHeader className="pb-2">
        <CardTitle>CTG</CardTitle>
      </CardHeader>

      <CardContent className="pl-0">
        <CardDescription className="pl-4 py-2">
          Foetal Heart Rate / BPM
        </CardDescription>
        <ChartContainer config={fhrConfig} className="w-full h-72">
          <LineChart
            id="foetal-heart-rate-chart"
            accessibilityLayer
            data={ctgData}
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
              type="number"
              domain={[80, 200]}
              width={40}
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

        <CardDescription className="pl-4 py-2">
          Uterine Contraction / mmHg
        </CardDescription>
        <ChartContainer config={utcConfig} className="w-full h-72">
          <LineChart
            id="uterine-contraction-chart"
            accessibilityLayer
            data={ctgData}
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
              type="number"
              domain={[0, 100]}
              width={40}
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

        <CardDescription className="pl-4 py-2">
          Cervical Dilation / cm
        </CardDescription>
        <ChartContainer config={cdConfig} className="w-full h-72">
          <LineChart
            id="cervical-dilation-chart"
            accessibilityLayer
            data={ctgData}
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
              type="number"
              domain={[0, 10]}
              width={40}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Line
              dataKey="cervicalDilation"
              type="monotone"
              stroke="var(--color-cervicalDilation)"
              strokeWidth={2}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
