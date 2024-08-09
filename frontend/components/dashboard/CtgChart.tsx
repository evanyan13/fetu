"use client";

import { CartesianGrid,  Line, LineChart, XAxis, YAxis } from "recharts";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartConfig } from "@/components/ui/chart";
import { useEffect, useMemo, useState } from "react";
import { addMinutes } from "@/lib/utils";

interface CtgData {
  time: string;
  heartRate?: number;
  uterineContraction?: number;
  cervicalDilation?: number;
}

// Helper functions to generate random values
function getRandomHeartRate() {
  return Math.floor(Math.random() * (160 - 130 + 1) * 0.5) + 130;
}

function getRandomUterineContraction(time: number) {
  const base = Math.random() * 20;
  const multiplier = time > 30 ? 1 : 0.5;
  const offset = 20;
  return base * multiplier + offset;
}

function generateRandomCervicalDilation(previousValue: number) {
  const increment = Math.random() * 0.2;
  return Math.min(previousValue + increment, 6);
}

const fhrConfig = {
  heartRate: {
    label: "heart-rate",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

const utcConfig = {
  uterineContraction: {
    label: "uterine-contraction",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

const cdConfig = {
  cervicalDilation: {
    label: "cervical-dilation",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig;

export function CtgChart() {
  const [ctgData, setCtgData] = useState<CtgData[]>([]);
  const [previousCervicalDilation, setPreviousCervicalDilation] = useState(2);

  useEffect(() => {
    const initialData: CtgData[] = [];
    for (let i = 0; i <= 60; i += 5) {
      const hours = Math.floor(i / 60);
      const minutes = i % 60;
      const time = `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`;

      const newHeartRate = getRandomHeartRate();
      const newContraction = getRandomUterineContraction(i);
      const newCervicalDilation = generateRandomCervicalDilation(previousCervicalDilation);

      initialData.push({
        time,
        heartRate: newHeartRate,
        uterineContraction: newContraction,
        cervicalDilation: newCervicalDilation,
      });
    }
    setCtgData(initialData);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCtgData((prevData) => {
        const lastTime = prevData.length > 0 ? prevData[prevData.length - 1].time : "00:00";

        const newTime = addMinutes(lastTime, 5);

        const newCervicalDilation = generateRandomCervicalDilation(previousCervicalDilation);
        setPreviousCervicalDilation(newCervicalDilation);

        const newDataPoint: CtgData = {
          time: newTime,
          heartRate: getRandomHeartRate(),
          uterineContraction: getRandomUterineContraction(prevData.length * 5),
          cervicalDilation: newCervicalDilation,
        };

        return [...prevData.slice(-11), newDataPoint];
      });
    }, 2500);

    return () => clearInterval(interval);
  }, [previousCervicalDilation]);

  const renderLastUpdatedAt = useMemo(() => {
    if (ctgData.length == 0) {
      return "";
    }
    const lastEntry = ctgData[ctgData.length - 1];
    return lastEntry.time;
  }, [ctgData]);

  return (
    <Card className="w-full h-full">
      <CardHeader className="pb-2">
        <CardTitle>CTG</CardTitle>
      </CardHeader>

      <CardContent className="pl-0">
        <CardDescription className="pl-4 py-2">Foetal Heart Rate / BPM</CardDescription>
        <CardDescription className="text-xs pl-4">Last updated at {renderLastUpdatedAt}</CardDescription>
        <ChartContainer config={fhrConfig} className="w-full h-72">
          <LineChart id="foetal-heart-rate-chart" accessibilityLayer data={ctgData}>
            <CartesianGrid vertical={false} />
            <XAxis dataKey="time" tickLine={true} axisLine={true} tickMargin={8} padding={{ left: 20, right: 20 }} />
            <YAxis type="number" domain={[80, 200]} width={40} />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Line dataKey="heartRate" type="monotone" stroke="var(--color-heartRate)" strokeWidth={2} />
          </LineChart>
        </ChartContainer>

        <CardDescription className="pl-4 py-2">Uterine Contraction / mmHg</CardDescription>
        <CardDescription className="text-xs pl-4">Last updated at {renderLastUpdatedAt}</CardDescription>
        <ChartContainer config={utcConfig} className="w-full h-72">
          <LineChart id="uterine-contraction-chart" accessibilityLayer data={ctgData}>
            <CartesianGrid vertical={false} />
            <XAxis dataKey="time" tickLine={true} axisLine={true} tickMargin={8} padding={{ left: 20, right: 20 }} />
            <YAxis type="number" domain={[0, 100]} width={40} />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Line dataKey="uterineContraction" type="monotone" stroke="var(--color-uterineContraction)" strokeWidth={2} />
          </LineChart>
        </ChartContainer>

        <CardDescription className="pl-4 py-2">Cervical Dilation / cm</CardDescription>
        <CardDescription className="text-xs pl-4">Last updated at {renderLastUpdatedAt}</CardDescription>
        <ChartContainer config={cdConfig} className="w-full h-72">
          <LineChart id="cervical-dilation-chart" accessibilityLayer data={ctgData}>
            <CartesianGrid vertical={false} />
            <XAxis dataKey="time" tickLine={true} axisLine={true} tickMargin={8} padding={{ left: 20, right: 20 }} />
            <YAxis type="number" domain={[0, 10]} width={40} />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Line dataKey="cervicalDilation" type="monotone" stroke="var(--color-cervicalDilation)" strokeWidth={2} />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
